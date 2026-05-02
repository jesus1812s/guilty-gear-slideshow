import { motion } from "motion/react";
import type { MechanicItem, Slide, VideoState } from "../../types";

type MechanicsSlideProps = {
  slide: Extract<Slide, { type: "mechanics" }>;
  onOpenVideo: (video: VideoState) => void;
};

function readMechanic(mechanic: MechanicItem) {
  if (Array.isArray(mechanic)) {
    return {
      description: mechanic[1],
      name: mechanic[0],
      video: undefined,
    };
  }

  return mechanic;
}

export function MechanicsSlide({ slide, onOpenVideo }: MechanicsSlideProps) {
  return (
    <article className="slide full">
      <div>
        <div className="kicker">{slide.kicker}</div>
        <h2>{slide.title}</h2>
        <p>{slide.copy}</p>
        <div className="mechanic-grid">
          {slide.mechanics.map((mechanic) => {
            const { description, name, video } = readMechanic(mechanic);
            const content = (
              <>
                <strong>{name}</strong>
                <span>{description}</span>
                {video ? <span className="topic-play">Play</span> : null}
              </>
            );

            if (video) {
              return (
                <motion.button
                  className="mechanic-card mechanic-card-button"
                  key={name}
                  type="button"
                  aria-label={`Reproducir video: ${name}`}
                  onClick={() => onOpenVideo(video)}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                >
                  {content}
                </motion.button>
              );
            }

            return (
              <motion.div
                className="mechanic-card"
                key={name}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                {content}
              </motion.div>
            );
          })}
        </div>
      </div>
    </article>
  );
}
