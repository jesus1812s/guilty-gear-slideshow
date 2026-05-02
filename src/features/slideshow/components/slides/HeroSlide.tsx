"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { ActionButton } from "@/shared/components/ActionButton";
import type { Slide, VideoState } from "../../types";

type HeroSlideProps = {
  slide: Extract<Slide, { type: "hero" }>;
  onNext: () => void;
  onOpenVideo: (video: VideoState) => void;
};

const heroVisuals = [
  {
    label: "Main visual",
    src: "/assets/gg/main-visual.jpg",
  },
  {
    label: "Season 2 main visual",
    src: "/assets/gg/season-2-main-visual.jpg",
  },
  {
    label: "Season 3 main visual",
    src: "/assets/gg/season-3-main-visual.jpg",
  },
  {
    label: "Season 4 main visual",
    src: "/assets/gg/season-4-main-visual.jpg",
  },
];

export function HeroSlide({ slide, onNext, onOpenVideo }: HeroSlideProps) {
  const [activeVisual, setActiveVisual] = useState(2);
  const [carouselActive, setCarouselActive] = useState(false);
  const visual = heroVisuals[activeVisual];

  useEffect(() => {
    if (!carouselActive) return;

    const interval = window.setInterval(() => {
      setActiveVisual((current) => (current + 1) % heroVisuals.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, [carouselActive]);

  const advanceCarousel = () => {
    setCarouselActive(true);
    setActiveVisual((current) => (current + 1) % heroVisuals.length);
  };

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
              onOpenVideo({ kind: "youtube", src: "RVd6vhFhYiM" })
            }
          >
            Ver trailer
          </ActionButton>
        </div>
      </div>
      <motion.button
        className="media-panel"
        type="button"
        aria-label={`Visual principal: ${visual.label}. Click para cambiar imagen.`}
        onClick={advanceCarousel}
        whileHover={{ y: -8 }}
        whileTap={{ scale: 0.985 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            className="hero-art"
            key={visual.src}
            aria-hidden="true"
            style={{ backgroundImage: `url("${visual.src}")` }}
            initial={{ opacity: 0, scale: 1.08, x: 18 }}
            animate={{ opacity: 1, scale: 1.02, x: 0 }}
            exit={{ opacity: 0, scale: 1.01, x: -18 }}
            transition={{ duration: 0.42, ease: "easeOut" }}
          />
        </AnimatePresence>
        <div className="hero-art-overlay" aria-hidden="true" />
        <span className="media-tag">{slide.mediaTag}</span>
        <div className="hero-hud-lines" aria-hidden="true" />
        <div className="media-label media-label-horh" aria-label="Heaven or Hell" />
        <div className="hero-carousel-dots" aria-hidden="true">
          {heroVisuals.map((item, index) => (
            <span
              className={index === activeVisual ? "is-active" : ""}
              key={item.src}
            />
          ))}
        </div>
      </motion.button>
    </article>
  );
}
