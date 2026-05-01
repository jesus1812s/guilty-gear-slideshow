"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { CharacterDetail } from "@/features/characters/components/CharacterDetail";
import { characters } from "@/features/characters/data/characters";
import { slides } from "../data/slides";
import { useSlideNavigation } from "../hooks/useSlideNavigation";
import type { VideoState } from "../types";
import { ProgressBar } from "./ProgressBar";
import { SlideControls } from "./SlideControls";
import { SlideView } from "./SlideView";
import { SpeakerNotes } from "./SpeakerNotes";
import { VideoModal } from "./VideoModal";

export function Deck() {
  const { activeSlide, goToSlide, nextSlide, previousSlide } =
    useSlideNavigation(slides.length);
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
    setSelectedCharacter(null);
    goToSlide(nextIndex);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
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
  }, [nextSlide, previousSlide, video]);

  return (
    <main className="deck" aria-live="polite">
      <header className="topbar">
        <button
          className="brand"
          type="button"
          onClick={() => goToDeckSlide(0)}
          aria-label="Ir al inicio"
        >
          <span className="brand-mark">GG</span>
          <span>STRIVE.exe</span>
        </button>

        <SlideControls
          onPrevious={() => goToDeckSlide(activeSlide - 1)}
          onNext={() => goToDeckSlide(activeSlide + 1)}
          onToggleNotes={() => setNotesOpen((current) => !current)}
        />
      </header>

      <ProgressBar activeSlide={activeSlide} slideCount={slides.length} />

      <AnimatePresence mode="wait">
        {character ? (
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

      <SpeakerNotes isOpen={notesOpen} notes={slide.notes} />

      <AnimatePresence>
        {video ? <VideoModal video={video} onClose={() => setVideo(null)} /> : null}
      </AnimatePresence>
    </main>
  );
}
