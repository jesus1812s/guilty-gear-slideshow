"use client";

import { motion } from "motion/react";
import { useState } from "react";

type MusicPlayerProps = {
  isActive: boolean;
};

const playlistUrl =
  "https://www.youtube-nocookie.com/embed/yYhYueboxuM?autoplay=1&list=PLpOrzUG88lRS7ilTJYV-tieNtR9PxKKIy&listType=playlist&rel=0";

export function MusicPlayer({ isActive }: MusicPlayerProps) {
  const [expanded, setExpanded] = useState(false);

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
        <iframe
          src={playlistUrl}
          title="Guilty Gear Strive playlist"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </motion.aside>
  );
}
