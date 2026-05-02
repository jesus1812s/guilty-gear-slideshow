"use client";

import { motion } from "motion/react";
import type { Slide } from "../../types";

type CreditsSlideProps = {
  slide: Extract<Slide, { type: "credits" }>;
};

const timeUpFrame = "/Strive_HUD/Battle_Xrd3_tex(HUD)/TXT_TIMEUP_00.png";

export function CreditsSlide({ slide }: CreditsSlideProps) {
  return (
    <article className="credits-slide" aria-label={slide.title}>
      <div className="timeup-stage" aria-hidden="true">
        <motion.span
          className="timeup-eff"
          initial={{ opacity: 0, scale: 0.72, rotate: -3 }}
          animate={{ opacity: [0, 0.95, 0.35], scale: [0.72, 1.12, 1], rotate: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <motion.span
          className="timeup-frame"
          style={{ backgroundImage: `url("${timeUpFrame}")` }}
          initial={{ opacity: 0, scale: 1.18 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.48, ease: "easeOut" }}
        />
      </div>
    </article>
  );
}
