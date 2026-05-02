/* eslint-disable @next/next/no-img-element */
import type { Slide, VideoState } from "../../types";

type VideosSlideProps = {
  slide: Extract<Slide, { type: "videos" }>;
  onOpenVideo: (video: VideoState) => void;
};

function getThumbnailSrc(kind: VideoState["kind"], src: string) {
  if (kind !== "youtube") {
    return null;
  }

  return `https://img.youtube.com/vi/${src}/hqdefault.jpg`;
}

export function VideosSlide({ slide, onOpenVideo }: VideosSlideProps) {
  return (
    <article className="slide full">
      <div>
        <div className="kicker">{slide.kicker}</div>
        <h2>{slide.title}</h2>
        <p>{slide.copy}</p>
        <div className="video-strip">
          {slide.videos.map(([title, kind, src]) => {
            const thumbnailSrc = getThumbnailSrc(kind, src);

            return (
              <button
                className="video-tile"
                key={`${kind}-${src}`}
                type="button"
                onClick={() => onOpenVideo({ kind, src })}
              >
                {thumbnailSrc ? (
                  <img
                    className="video-thumbnail"
                    src={thumbnailSrc}
                    alt=""
                    loading="lazy"
                  />
                ) : (
                  <span className="video-thumbnail video-thumbnail-fallback" />
                )}
                <strong className="video-title">{title}</strong>
              </button>
            );
          })}
        </div>
      </div>
    </article>
  );
}
