import { motion } from "motion/react";
import type { VideoState } from "../types";

type VideoModalProps = {
  video: VideoState;
  onClose: () => void;
};

export function VideoModal({ video, onClose }: VideoModalProps) {
  return (
    <motion.section
      className="video-backdrop"
      role="dialog"
      aria-modal="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        className="close-video"
        type="button"
        aria-label="Cerrar video"
        onClick={onClose}
      >
        x
      </button>
      <motion.div
        className="video-frame"
        initial={{ scale: 0.96, y: 12 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96, y: 12 }}
      >
        {video.kind === "youtube" ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.src}?autoplay=1&rel=0`}
            title="Video de Guilty Gear Strive"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <video src={video.src} controls autoPlay />
        )}
      </motion.div>
    </motion.section>
  );
}
