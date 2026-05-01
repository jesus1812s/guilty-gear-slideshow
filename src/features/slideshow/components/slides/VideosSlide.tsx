import type { Slide, VideoState } from "../../types";

type VideosSlideProps = {
  slide: Extract<Slide, { type: "videos" }>;
  onOpenVideo: (video: VideoState) => void;
};

export function VideosSlide({ slide, onOpenVideo }: VideosSlideProps) {
  return (
    <article className="slide full">
      <div>
        <div className="kicker">{slide.kicker}</div>
        <h2>{slide.title}</h2>
        <p>{slide.copy}</p>
        <div className="video-strip">
          {slide.videos.map(([title, kind, src]) => (
            <button
              className="video-tile"
              key={`${kind}-${src}`}
              type="button"
              onClick={() => onOpenVideo({ kind, src })}
            >
              <strong>{title}</strong>
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}
