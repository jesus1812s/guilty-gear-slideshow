"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type MusicPlayerProps = {
  isActive: boolean;
  isPaused: boolean;
  track: MusicTrack;
};

type MusicTrack = "credits" | "main";

type YouTubePlayer = {
  destroy: () => void;
  pauseVideo: () => void;
  playVideo: () => void;
  setVolume: (volume: number) => void;
};

type YouTubeApi = {
  Player: new (
    element: HTMLElement,
    options: {
      events?: {
        onReady?: (event: { target: YouTubePlayer }) => void;
      };
      height?: string;
      host?: string;
      playerVars?: Record<string, number | string>;
      videoId: string;
      width?: string;
    },
  ) => YouTubePlayer;
};

declare global {
  interface Window {
    YT?: YouTubeApi;
    onYouTubeIframeAPIReady?: () => void;
  }
}

const musicTracks: Record<
  MusicTrack,
  { fallbackUrl: string; playerVars: Record<string, number | string>; videoId: string }
> = {
  credits: {
    fallbackUrl:
      "https://www.youtube-nocookie.com/embed/hWPi-G14QEY?autoplay=1&rel=0",
    playerVars: {
      autoplay: 0,
      controls: 1,
      playsinline: 1,
      rel: 0,
    },
    videoId: "hWPi-G14QEY",
  },
  main: {
    fallbackUrl:
      "https://www.youtube-nocookie.com/embed/yYhYueboxuM?autoplay=1&list=PLpOrzUG88lRS7ilTJYV-tieNtR9PxKKIy&listType=playlist&rel=0",
    playerVars: {
      autoplay: 0,
      controls: 1,
      list: "PLpOrzUG88lRS7ilTJYV-tieNtR9PxKKIy",
      listType: "playlist",
      playsinline: 1,
      rel: 0,
    },
    videoId: "yYhYueboxuM",
  },
};
let youtubeApiPromise: Promise<YouTubeApi> | null = null;

function loadYouTubeApi() {
  if (window.YT?.Player) {
    return Promise.resolve(window.YT);
  }

  if (youtubeApiPromise) {
    return youtubeApiPromise;
  }

  youtubeApiPromise = new Promise<YouTubeApi>((resolve, reject) => {
    const existingCallback = window.onYouTubeIframeAPIReady;
    const timeout = window.setTimeout(() => {
      reject(new Error("YouTube IFrame API timeout"));
    }, 6500);

    window.onYouTubeIframeAPIReady = () => {
      window.clearTimeout(timeout);
      existingCallback?.();

      if (window.YT?.Player) {
        resolve(window.YT);
      } else {
        reject(new Error("YouTube IFrame API missing Player"));
      }
    };

    if (document.getElementById("youtube-iframe-api")) {
      return;
    }

    const script = document.createElement("script");
    script.id = "youtube-iframe-api";
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    script.onerror = () => {
      window.clearTimeout(timeout);
      reject(new Error("YouTube IFrame API failed"));
    };
    document.head.appendChild(script);
  });

  return youtubeApiPromise;
}

export function MusicPlayer({ isActive, isPaused, track }: MusicPlayerProps) {
  const [expanded, setExpanded] = useState(false);
  const [useFallback, setUseFallback] = useState(false);
  const isPausedRef = useRef(isPaused);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const musicTrack = musicTracks[track];

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    if (!isActive || !playerContainerRef.current || useFallback) {
      return;
    }

    let cancelled = false;
    const container = playerContainerRef.current;
    container.replaceChildren();
    const playerHost = document.createElement("div");
    playerHost.className = "music-player-host";
    container.appendChild(playerHost);

    loadYouTubeApi()
      .then((api) => {
        if (cancelled) {
          return;
        }

        playerRef.current = new api.Player(playerHost, {
          height: "100%",
          host: "https://www.youtube-nocookie.com",
          playerVars: musicTrack.playerVars,
          videoId: musicTrack.videoId,
          width: "100%",
          events: {
            onReady: (event) => {
              event.target.setVolume(50);
              if (isPausedRef.current) {
                event.target.pauseVideo();
              } else {
                event.target.playVideo();
              }
            },
          },
        });
      })
      .catch(() => {
        if (!cancelled) {
          setUseFallback(true);
        }
      });

    return () => {
      cancelled = true;
      playerRef.current?.destroy();
      playerRef.current = null;
      container.replaceChildren();
    };
  }, [isActive, musicTrack, useFallback]);

  useEffect(() => {
    if (!isActive || useFallback) {
      return;
    }

    if (isPaused) {
      playerRef.current?.pauseVideo();
    } else {
      playerRef.current?.playVideo();
    }
  }, [isActive, isPaused, useFallback]);

  if (!isActive) return null;

  return (
    <motion.aside
      className={expanded ? "music-player is-expanded" : "music-player"}
      aria-label="Reproductor de musica"
      initial={{ opacity: 0, x: -18, y: 12 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: -18, y: 12 }}
      transition={{ duration: 0.24 }}
    >
      <button
        className="music-toggle"
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((current) => !current)}
      >
        <span>BGM</span>
        <span>{expanded ? "Hide" : "Open"}</span>
      </button>
      <div className="music-player-frame" aria-hidden={!expanded}>
        {useFallback ? (
          <iframe
            src={isPaused ? "about:blank" : musicTrack.fallbackUrl}
            title="Guilty Gear Strive playlist"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="music-player-api" ref={playerContainerRef} />
        )}
      </div>
    </motion.aside>
  );
}
