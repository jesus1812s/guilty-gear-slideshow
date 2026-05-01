"use client";

import { motion } from "motion/react";
import { useSyncExternalStore } from "react";

type IntroOpeningVideoProps = {
  onClose: () => void;
};

const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function IntroOpeningVideo({ onClose }: IntroOpeningVideoProps) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  return (
    <motion.section
      className="intro-video"
      aria-label="Opening de Guilty Gear Strive"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.24 }}
    >
      {mounted ? (
        <iframe
          className="intro-video-frame"
          src="https://www.youtube-nocookie.com/embed/Yhr9WpjaDzw?autoplay=1&mute=0&controls=1&playsinline=1&rel=0&modestbranding=1"
          title="Opening de Guilty Gear Strive"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          suppressHydrationWarning
        />
      ) : null}
      <div className="intro-video-vignette" aria-hidden="true" />
      <button className="intro-skip-button" type="button" onClick={onClose}>
        Cerrar opening
      </button>
    </motion.section>
  );
}
