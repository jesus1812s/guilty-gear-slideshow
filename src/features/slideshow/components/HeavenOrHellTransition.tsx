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
      aria-label="Heaven or Hell"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0.12 : 0.18 }}
    >
      <div className="horh-raster" aria-hidden="true" />
      <motion.div
        className="horh-stage"
        animate={
          reduceMotion
            ? { scale: 1 }
            : {
                scale: [1, 1.018, 0.992, 1.01, 1],
                x: [0, -8, 7, -3, 0],
              }
        }
        transition={{ duration: 1.1, delay: 0.62, ease: "easeOut" }}
      >
        <motion.img
          className="horh-word horh-heaven"
          src="/assets/hud/heaven.png"
          alt=""
          initial={{ opacity: 0, x: "-26vw", skewX: -14, scale: 1.08 }}
          animate={{ opacity: 1, x: 0, skewX: 0, scale: 1 }}
          transition={{ duration: reduceMotion ? 0.12 : 0.46, ease: "easeOut" }}
        />
        <motion.img
          className="horh-word horh-hell"
          src="/assets/hud/hell.png"
          alt=""
          initial={{ opacity: 0, x: "26vw", skewX: 14, scale: 1.08 }}
          animate={{ opacity: 1, x: 0, skewX: 0, scale: 1 }}
          transition={{
            duration: reduceMotion ? 0.12 : 0.46,
            delay: reduceMotion ? 0 : 0.16,
            ease: "easeOut",
          }}
        />
        <motion.img
          className="horh-word horh-or"
          src="/assets/hud/or.png"
          alt=""
          initial={{ opacity: 0, rotate: -28, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{
            duration: reduceMotion ? 0.12 : 0.28,
            delay: reduceMotion ? 0 : 0.48,
            ease: "backOut",
          }}
        />
        <motion.img
          className="horh-eff horh-eff-a"
          src="/assets/hud/heaven-hell-eff.png"
          alt=""
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0, 0.95, 0], scale: [0.6, 4.8, 8] }}
          transition={{
            duration: reduceMotion ? 0.18 : 0.82,
            delay: reduceMotion ? 0.1 : 0.72,
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
        className="lets-rock"
        aria-label="Let's Rock"
        initial={{ opacity: 0, scale: 1.22, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0.12 : 0.28,
          delay: reduceMotion ? 0.28 : 1.62,
          ease: "easeOut",
        }}
      >
        <motion.img className="lets" src="/assets/hud/txt-lets.png" alt="" />
        <motion.img className="rock" src="/assets/hud/txt-rock.png" alt="" />
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
