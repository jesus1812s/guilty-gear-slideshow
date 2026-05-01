import { CharacterGrid } from "@/features/characters/components/CharacterGrid";
import type { Slide, VideoState } from "../types";
import { HeroSlide } from "./slides/HeroSlide";
import { MechanicsSlide } from "./slides/MechanicsSlide";
import { TopicsSlide } from "./slides/TopicsSlide";
import { VideosSlide } from "./slides/VideosSlide";

type SlideViewProps = {
  slide: Slide;
  onNext: () => void;
  onOpenCharacter: (slug: string) => void;
  onOpenVideo: (video: VideoState) => void;
};

export function SlideView({
  slide,
  onNext,
  onOpenCharacter,
  onOpenVideo,
}: SlideViewProps) {
  if (slide.type === "hero") {
    return (
      <HeroSlide slide={slide} onNext={onNext} onOpenVideo={onOpenVideo} />
    );
  }

  if (slide.type === "characters") {
    return (
      <article className="slide full">
        <div>
          <div className="kicker">{slide.kicker}</div>
          <h2>{slide.title}</h2>
          <p>{slide.copy}</p>
          <CharacterGrid onOpenCharacter={onOpenCharacter} />
        </div>
      </article>
    );
  }

  if (slide.type === "mechanics") {
    return <MechanicsSlide slide={slide} />;
  }

  if (slide.type === "videos") {
    return <VideosSlide slide={slide} onOpenVideo={onOpenVideo} />;
  }

  return <TopicsSlide slide={slide} />;
}
