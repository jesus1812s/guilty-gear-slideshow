"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { CharacterDetail } from "@/features/characters/components/CharacterDetail";
import { characters } from "@/features/characters/data/characters";
import { slides } from "../data/slides";
import { useSlideNavigation } from "../hooks/useSlideNavigation";
import type { VideoState } from "../types";
import { HeavenOrHellTransition } from "./HeavenOrHellTransition";
import { IntroOpeningVideo } from "./IntroOpeningVideo";
import { ProgressBar } from "./ProgressBar";
import { SlideControls } from "./SlideControls";
import { SlideView } from "./SlideView";
import { SpeakerNotes } from "./SpeakerNotes";
import { VideoModal } from "./VideoModal";

type IntroPhase = "opening" | "splash" | "heaven-or-hell" | "deck";

export function Deck() {
  const { activeSlide, goToSlide, nextSlide, previousSlide } =
    useSlideNavigation(slides.length);
  const [introPhase, setIntroPhase] = useState<IntroPhase>("opening");
  const [notesOpen, setNotesOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const [video, setVideo] = useState<VideoState | null>(null);

  const slide = slides[activeSlide];
  const character = useMemo(
    () => characters.find((item) => item.slug === selectedCharacter),
    [selectedCharacter],
  );

  const closeCharacter = () => {
    setSelectedCharacter(null);
    goToSlide(3);
  };

  const goToDeckSlide = (nextIndex: number) => {
    setIntroPhase("deck");
    setSelectedCharacter(null);
    goToSlide(nextIndex);
  };

  const startPresentation = () => {
    setIntroPhase("heaven-or-hell");
    setSelectedCharacter(null);
    setNotesOpen(false);
    goToSlide(0);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (introPhase === "opening") {
        if (event.key === "Escape") setIntroPhase("splash");
        return;
      }

      if (introPhase !== "deck") {
        return;
      }

      if (video) {
        if (event.key === "Escape") setVideo(null);
        return;
      }

      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        setSelectedCharacter(null);
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setSelectedCharacter(null);
        previousSlide();
      }

      if (event.key.toLowerCase() === "n") {
        setNotesOpen((current) => !current);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [introPhase, nextSlide, previousSlide, video]);

  return (
    <main className="deck" aria-live="polite">
      {introPhase === "deck" ? (
        <>
          <header className="topbar">
            <button
              className="brand"
              type="button"
              onClick={() => goToDeckSlide(0)}
              aria-label="Ir al inicio"
            >
              <span className="brand-mark brand-ok" aria-hidden="true" />
              <span>STRIVE.exe</span>
            </button>

            <SlideControls
              onPrevious={() => goToDeckSlide(activeSlide - 1)}
              onNext={() => goToDeckSlide(activeSlide + 1)}
              onToggleNotes={() => setNotesOpen((current) => !current)}
            />
          </header>

          <ProgressBar activeSlide={activeSlide} slideCount={slides.length} />
        </>
      ) : null}

      <AnimatePresence mode="wait">
        {introPhase === "opening" ? (
          <IntroOpeningVideo key="opening" onClose={() => setIntroPhase("splash")} />
        ) : introPhase === "splash" ? (
          <motion.section
            className="splash-shell"
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.24 }}
          >
            <SlideView
              slide={slide}
              onNext={startPresentation}
              onOpenCharacter={setSelectedCharacter}
              onOpenVideo={setVideo}
              mode="splash"
            />
          </motion.section>
        ) : introPhase === "heaven-or-hell" ? (
          <HeavenOrHellTransition
            key="heaven-or-hell"
            onComplete={() => setIntroPhase("deck")}
          />
        ) : character ? (
          <motion.div
            key={character.slug}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.22 }}
          >
            <CharacterDetail
              character={character}
              onBack={closeCharacter}
              onOpenVideo={setVideo}
            />
          </motion.div>
        ) : (
          <motion.section
            className="slide-shell"
            key={activeSlide}
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -28 }}
            transition={{ duration: 0.22 }}
          >
            <SlideView
              slide={slide}
              onNext={() => goToDeckSlide(activeSlide + 1)}
              onOpenCharacter={setSelectedCharacter}
              onOpenVideo={setVideo}
            />
          </motion.section>
        )}
      </AnimatePresence>

      {introPhase === "deck" ? (
        <SpeakerNotes isOpen={notesOpen} notes={slide.notes} />
      ) : null}

      <AnimatePresence>
        {video ? <VideoModal video={video} onClose={() => setVideo(null)} /> : null}
      </AnimatePresence>
    </main>
  );
}
