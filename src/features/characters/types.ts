import type { VideoState } from "@/features/slideshow/types";

export type Character = {
  slug: string;
  name: string;
  code: string;
  archetype: string;
  subtext: string;
  hotTake: string;
  bio: string;
  short: string;
  why: string;
  chibiSrc: string;
  portraitSrc: string;
  stats: Record<string, number>;
  themeVideo?: VideoState;
  trailerVideo?: VideoState;
  referenceVideo?: VideoState;
};
