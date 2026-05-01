import { motion } from "motion/react";
import type { Slide } from "../../types";

type TopicsSlideProps = {
  slide: Extract<Slide, { type: "topics" }>;
};

export function TopicsSlide({ slide }: TopicsSlideProps) {
  return (
    <article className="slide full">
      <div>
        <div className="kicker">{slide.kicker}</div>
        <h2>{slide.title}</h2>
        <p>{slide.copy}</p>
        <div className="topic-grid">
          {slide.topics.map(([title, description], index) => (
            <motion.div
              className="topic-card"
              key={title}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <span className="number">0{index + 1}</span>
              <strong>{title}</strong>
              <span>{description}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </article>
  );
}
