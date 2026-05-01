export type Character = {
  slug: string;
  name: string;
  code: string;
  archetype: string;
  short: string;
  why: string;
  chibiSrc: string;
  portraitSrc: string;
  stats: Record<string, number>;
};
