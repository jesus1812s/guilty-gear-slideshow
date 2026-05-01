import { motion } from "motion/react";
import { ActionButton } from "@/shared/components/ActionButton";
import type { Slide, VideoState } from "../../types";

type HeroSlideProps = {
  slide: Extract<Slide, { type: "hero" }>;
  onNext: () => void;
  onOpenVideo: (video: VideoState) => void;
};

export function HeroSlide({ slide, onNext, onOpenVideo }: HeroSlideProps) {
  return (
    <article className="slide">
      <div className="headline-stack">
        <div className="kicker">{slide.kicker}</div>
        <h1>{slide.title}</h1>
        <p>{slide.copy}</p>
        <div className="cta-row">
          <ActionButton onClick={onNext}>Empezar</ActionButton>
          <ActionButton
            variant="ghost"
            onClick={() =>
              onOpenVideo({ kind: "youtube", src: "Yhr9WpjaDzw" })
            }
          >
            Ver trailer
          </ActionButton>
        </div>
      </div>
      <motion.div
        className="media-panel"
        aria-label="Visual principal"
        whileHover={{ rotate: -1.5, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
      >
        <span className="media-tag">{slide.mediaTag}</span>
        <span className="media-label">{slide.mediaLabel}</span>
      </motion.div>
    </article>
  );
}
