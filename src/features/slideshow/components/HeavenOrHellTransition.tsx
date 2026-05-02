"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect } from "react";

type HeavenOrHellTransitionProps = {
  onComplete: () => void;
};

export function HeavenOrHellTransition({
  onComplete,
}: HeavenOrHellTransitionProps) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timeout = window.setTimeout(onComplete, reduceMotion ? 760 : 2850);
    return () => window.clearTimeout(timeout);
  }, [onComplete, reduceMotion]);

  return (
    <motion.section
      className="horh-transition"
      aria-label="Let's Rock"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0.12 : 0.18 }}
    >
      <div className="horh-raster" aria-hidden="true" />
      <motion.div
        className="lets-rock-stage"
        animate={
          reduceMotion
            ? { scale: 1 }
            : {
                scale: [1, 1.08, 0.98, 1.03, 1],
                x: [0, -12, 10, -5, 0],
              }
        }
        transition={{ duration: 0.86, delay: 0.34, ease: "easeOut" }}
      >
        <motion.img
          className="lets-rock-eff"
          src="/Strive_HUD/Battle_Xrd3_tex(HUD)/LetsRock_EFF.png"
          alt=""
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          animate={{ opacity: [0, 1, 0.2], scale: [0.7, 1.7, 2.25], rotate: 0 }}
          transition={{
            duration: reduceMotion ? 0.2 : 0.92,
            delay: reduceMotion ? 0 : 0.34,
            ease: "easeOut",
          }}
        />
        <motion.img
          className="lets-rock-word lets-rock-lets"
          src="/Strive_HUD/Battle_Xrd3_tex(HUD)/TXT_LetsRock_Lets.png"
          alt=""
          initial={{ opacity: 0, y: reduceMotion ? 0 : "-22vh", scale: 1.18 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: reduceMotion ? 0.12 : 0.42, ease: "easeOut" }}
        />
        <motion.img
          className="lets-rock-word lets-rock-rock"
          src="/Strive_HUD/Battle_Xrd3_tex(HUD)/TXT_LetsRock_RocK.png"
          alt=""
          initial={{ opacity: 0, y: reduceMotion ? 0 : "24vh", scale: 1.2 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: reduceMotion ? 0.12 : 0.46,
            delay: reduceMotion ? 0 : 0.18,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="horh-line horh-line-top"
          aria-hidden="true"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: [0, 1, 0.82] }}
          transition={{ duration: reduceMotion ? 0.12 : 0.42, delay: 0.4 }}
        />
        <motion.div
          className="horh-line horh-line-bottom"
          aria-hidden="true"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: [0, 1, 0.82] }}
          transition={{ duration: reduceMotion ? 0.12 : 0.42, delay: 0.5 }}
        />
      </motion.div>

      <motion.div
        className="horh-flash"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: reduceMotion ? [0, 0.35, 0] : [0, 0.78, 0, 0.34, 0] }}
        transition={{
          duration: reduceMotion ? 0.34 : 1.12,
          delay: reduceMotion ? 0.18 : 0.78,
        }}
      />
    </motion.section>
  );
}
