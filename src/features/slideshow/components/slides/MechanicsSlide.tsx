import { motion } from "motion/react";
import type { Slide } from "../../types";

type MechanicsSlideProps = {
  slide: Extract<Slide, { type: "mechanics" }>;
};

export function MechanicsSlide({ slide }: MechanicsSlideProps) {
  return (
    <article className="slide full">
      <div>
        <div className="kicker">{slide.kicker}</div>
        <h2>{slide.title}</h2>
        <p>{slide.copy}</p>
        <div className="mechanic-grid">
          {slide.mechanics.map(([name, description]) => (
            <motion.div
              className="mechanic-card"
              key={name}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <strong>{name}</strong>
              <span>{description}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </article>
  );
}
