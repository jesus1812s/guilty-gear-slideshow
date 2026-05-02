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
  const { referenceVideo, themeVideo, trailerVideo } = character;

  return (
    <section className="character-route">
      <button className="back-link" type="button" onClick={onBack}>
        &lt;- Volver al roster
      </button>
      <article className="detail-layout">
        <div className="detail-portrait-shell">
          <div className="detail-portrait" data-code={character.code}>
            <Image
              className="detail-portrait-image"
              src={character.portraitSrc}
              alt={character.name}
              width={720}
              height={820}
              priority
            />
          </div>
        </div>
        <div>
          <div className="kicker">{character.hotTake}</div>
          <h2>{character.name}</h2>
          <p className="character-subtext">{character.subtext}</p>
          <p>{character.bio}</p>
          <p>{character.why}</p>
          <div className="stat-list">
            {Object.entries(character.stats).map(([label, value]) => (
              <StatMeter label={label} value={value} key={label} />
            ))}
          </div>
          <div className="cta-row">
            {themeVideo ? (
              <ActionButton
                className="action-button-impact"
                variant="ghost"
                onClick={() => onOpenVideo(themeVideo)}
              >
                ESCUCHAR TEMA
              </ActionButton>
            ) : null}
            {trailerVideo ? (
              <ActionButton
                className="action-button-impact"
                onClick={() => onOpenVideo(trailerVideo)}
              >
                VER TRAILER
              </ActionButton>
            ) : null}
            {referenceVideo ? (
              <ActionButton
                className="action-button-impact"
                variant="ghost"
                onClick={() => onOpenVideo(referenceVideo)}
              >
                ALGO MAS
              </ActionButton>
            ) : null}
          </div>
        </div>
      </article>
    </section>
  );
}
