import { motion } from "motion/react";
import type { Slide, TopicItem, VideoState } from "../../types";

type TopicsSlideProps = {
  slide: Extract<Slide, { type: "topics" }>;
  onOpenVideo: (video: VideoState) => void;
};

function readTopic(topic: TopicItem) {
  if (Array.isArray(topic)) {
    return {
      description: topic[1],
      title: topic[0],
      video: undefined,
    };
  }

  return topic;
}

export function TopicsSlide({ slide, onOpenVideo }: TopicsSlideProps) {
  return (
    <article className="slide full">
      <div>
        <div className="kicker">{slide.kicker}</div>
        <h2>{slide.title}</h2>
        <p>{slide.copy}</p>
        <div className="topic-grid">
          {slide.topics.map((topic, index) => {
            const { description, title, video } = readTopic(topic);
            const content = (
              <>
                <span className="number">0{index + 1}</span>
                <strong>{title}</strong>
                <span>{description}</span>
                {video ? <span className="topic-play">Play</span> : null}
              </>
            );

            if (video) {
              return (
                <motion.button
                  className="topic-card topic-card-button"
                  key={title}
                  type="button"
                  aria-label={`Reproducir video: ${title}`}
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
                className="topic-card"
                key={title}
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
