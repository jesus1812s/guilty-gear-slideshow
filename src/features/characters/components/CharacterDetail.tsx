import Image from "next/image";
import { ActionButton } from "@/shared/components/ActionButton";
import type { VideoState } from "@/features/slideshow/types";
import type { Character } from "../types";
import { StatMeter } from "./StatMeter";

type CharacterDetailProps = {
  character: Character;
  onBack: () => void;
  onOpenVideo: (video: VideoState) => void;
};

export function CharacterDetail({
  character,
  onBack,
  onOpenVideo,
}: CharacterDetailProps) {
  return (
    <section className="character-route">
      <button className="back-link" type="button" onClick={onBack}>
        &lt;- Volver al roster
      </button>
      <article className="detail-layout">
        <div className="detail-portrait" data-code={character.code}>
          <Image
            className="detail-portrait-image"
            src={character.portraitSrc}
            alt={character.name}
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
            priority
          />
        </div>
        <div>
          <div className="kicker">{character.archetype}</div>
          <h2>{character.name}</h2>
          <p>{character.why}</p>
          <p>{character.short}</p>
          <div className="stat-list">
            {Object.entries(character.stats).map(([label, value]) => (
              <StatMeter label={label} value={value} key={label} />
            ))}
          </div>
          <div className="cta-row">
            <ActionButton
              onClick={() =>
                onOpenVideo({
                  kind: "local",
                  src: `/videos/${character.slug}.mp4`,
                })
              }
            >
              Ver clip local
            </ActionButton>
            <ActionButton
              variant="ghost"
              onClick={() =>
                onOpenVideo({ kind: "youtube", src: "Yhr9WpjaDzw" })
              }
            >
              Ver referencia
            </ActionButton>
          </div>
        </div>
      </article>
    </section>
  );
}
