import type { Character } from "../types";

type CharacterSeed = {
  slug: string;
  name: string;
  code: string;
  archetype: string;
};

const archetypeStats: Record<string, Record<string, number>> = {
  Balance: { Damage: 72, Pressure: 68, Range: 70, Difficulty: 52 },
  Power: { Damage: 92, Pressure: 64, Range: 62, Difficulty: 58 },
  Zoning: { Damage: 66, Pressure: 54, Range: 94, Difficulty: 70 },
  Rushdown: { Damage: 76, Pressure: 92, Range: 48, Difficulty: 64 },
  Unique: { Damage: 70, Pressure: 74, Range: 72, Difficulty: 86 },
  "One Shot": { Damage: 98, Pressure: 72, Range: 88, Difficulty: 82 },
  Shooting: { Damage: 74, Pressure: 84, Range: 90, Difficulty: 88 },
};

const seeds: CharacterSeed[] = [
  { archetype: "Balance", code: "SOL", name: "Sol Badguy", slug: "sol-badguy" },
  { archetype: "Balance", code: "KY", name: "Ky Kiske", slug: "ky-kiske" },
  { archetype: "Power", code: "MAY", name: "May", slug: "may" },
  { archetype: "Zoning", code: "AXL", name: "Axl Low", slug: "axl-low" },
  { archetype: "Rushdown", code: "CHIPP", name: "Chipp Zanuff", slug: "chipp-zanuff" },
  { archetype: "Power", code: "POTEMKIN", name: "Potemkin", slug: "potemkin" },
  { archetype: "Unique", code: "FAUST", name: "Faust", slug: "faust" },
  { archetype: "Rushdown", code: "MILLIA", name: "Millia Rage", slug: "millia-rage" },
  { archetype: "Unique", code: "ZATO", name: "Zato-1", slug: "zato-1" },
  {
    archetype: "Balance",
    code: "RAMLETHAL",
    name: "Ramlethal Valentine",
    slug: "ramlethal-valentine",
  },
  { archetype: "Rushdown", code: "LEO", name: "Leo Whitefang", slug: "leo-whitefang" },
  {
    archetype: "One Shot",
    code: "NAGORIYUKI",
    name: "Nagoriyuki",
    slug: "nagoriyuki",
  },
  { archetype: "Rushdown", code: "GIOVANNA", name: "Giovanna", slug: "giovanna" },
  { archetype: "Balance", code: "ANJI", name: "Anji Mito", slug: "anji-mito" },
  { archetype: "Rushdown", code: "I-NO", name: "I-No", slug: "i-no" },
  {
    archetype: "Power",
    code: "GOLDLEWIS",
    name: "Goldlewis Dickinson",
    slug: "goldlewis-dickinson",
  },
  { archetype: "Unique", code: "JACK-O'", name: "Jack-O'", slug: "jack-o" },
  {
    archetype: "Shooting",
    code: "HAPPY CHAOS",
    name: "Happy Chaos",
    slug: "happy-chaos",
  },
  { archetype: "Balance", code: "BAIKEN", name: "Baiken", slug: "baiken" },
  { archetype: "Zoning", code: "TESTAMENT", name: "Testament", slug: "testament" },
  { archetype: "Balance", code: "BRIDGET", name: "Bridget", slug: "bridget" },
  { archetype: "Balance", code: "SIN", name: "Sin Kiske", slug: "sin-kiske" },
  { archetype: "Unique", code: "BEDMAN?", name: "Bedman?", slug: "bedman" },
  { archetype: "Unique", code: "ASUKA R#", name: "Asuka R#", slug: "asuka-r-sharp" },
  { archetype: "Zoning", code: "JOHNNY", name: "Johnny", slug: "johnny" },
  {
    archetype: "Rushdown",
    code: "ELPHELT",
    name: "Elphelt Valentine",
    slug: "elphelt-valentine",
  },
  { archetype: "Unique", code: "A.B.A", name: "A.B.A", slug: "aba" },
  { archetype: "Power", code: "SLAYER", name: "Slayer", slug: "slayer" },
  { archetype: "Unique", code: "DIZZY", name: "Dizzy", slug: "dizzy" },
  { archetype: "Zoning", code: "VENOM", name: "Venom", slug: "venom" },
  { archetype: "Balance", code: "UNIKA", name: "Unika", slug: "unika" },
  { archetype: "Balance", code: "LUCY", name: "Lucy", slug: "lucy" },
  { archetype: "Rushdown", code: "JAM", name: "Jam", slug: "jam" },
];

function buildCharacter(seed: CharacterSeed): Character {
  return {
    ...seed,
    chibiSrc: `/characters/${seed.slug}/chibi.png`,
    portraitSrc: `/characters/${seed.slug}/portrait.png`,
    short: `${seed.archetype} fighter. ${seed.name} aporta una forma distinta de leer el neutral, la presion y el ritmo de Strive.`,
    why: `${seed.name} sirve para explicar como Guilty Gear Strive convierte identidad visual en gameplay: silueta clara, plan de juego reconocible y una fantasia de combate propia.`,
    stats: archetypeStats[seed.archetype],
  };
}

export const characters = seeds.map(buildCharacter);
