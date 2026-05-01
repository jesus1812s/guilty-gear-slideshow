import { characters } from "../data/characters";
import { CharacterCard } from "./CharacterCard";

type CharacterGridProps = {
  onOpenCharacter: (slug: string) => void;
};

export function CharacterGrid({ onOpenCharacter }: CharacterGridProps) {
  return (
    <div className="character-grid">
      {characters.map((character) => (
        <CharacterCard
          character={character}
          key={character.slug}
          onClick={() => onOpenCharacter(character.slug)}
        />
      ))}
    </div>
  );
}
