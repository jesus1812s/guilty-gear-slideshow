import { motion } from "motion/react";

type SplashSlideProps = {
  title: string;
  onStartPresentation: () => void;
};

const startSoundUrl =
  "/sounds/Guilty%20Gear%20Strive%20-%20Let%20s%20ROCK%20Green%20Screen%201080p_128k.mp3";

export function SplashSlide({ title, onStartPresentation }: SplashSlideProps) {
  const startPresentation = () => {
    const audio = new Audio(startSoundUrl);
    audio.volume = 0.9;
    void audio.play().catch(() => {
      // Presentation still starts if browser blocks audio playback.
    });
    onStartPresentation();
  };

  return (
    <article className="splash-slide">
      <motion.div
        className="splash-kicker"
        aria-hidden="true"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.32, delay: 0.22 }}
      >
        Heaven or Hell
      </motion.div>
      <motion.button
        className="splash-logo-button"
        type="button"
        onClick={startPresentation}
        aria-label="Empezar presentacion"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.36, ease: "easeOut" }}
      >
        <span className="sr-only">{title}</span>
      </motion.button>
      <motion.p
        className="splash-prompt"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, delay: 0.38 }}
      >
        Click para iniciar la presentacion
      </motion.p>
    </article>
  );
}
