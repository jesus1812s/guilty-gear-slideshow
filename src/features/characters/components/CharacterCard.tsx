import { motion } from "motion/react";
import Image from "next/image";
import type { Character } from "../types";

type CharacterCardProps = {
  character: Pick<
    Character,
    "archetype" | "chibiSrc" | "code" | "name" | "short"
  >;
  onClick: () => void;
};

export function CharacterCard({ character, onClick }: CharacterCardProps) {
  return (
    <motion.button
      className="character-card"
      data-code={character.code}
      type="button"
      onClick={onClick}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
    >
      <Image
        className="character-chibi"
        src={character.chibiSrc}
        alt=""
        width={140}
        height={120}
      />
      <strong>{character.name}</strong>
      <span>{character.archetype}</span>
      <div className="tooltip">{character.short}</div>
    </motion.button>
  );
}
