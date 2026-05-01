import { useCallback, useState } from "react";

export function useSlideNavigation(slideCount: number) {
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = useCallback(
    (nextSlide: number) => {
      setActiveSlide(Math.max(0, Math.min(slideCount - 1, nextSlide)));
    },
    [slideCount],
  );

  const nextSlide = useCallback(() => {
    setActiveSlide((current) => Math.min(slideCount - 1, current + 1));
  }, [slideCount]);

  const previousSlide = useCallback(() => {
    setActiveSlide((current) => Math.max(0, current - 1));
  }, []);

  return {
    activeSlide,
    goToSlide,
    nextSlide,
    previousSlide,
  };
}
