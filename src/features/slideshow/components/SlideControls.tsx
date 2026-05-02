import Image from "next/image";

type SlideControlsProps = {
  onPrevious: () => void;
  onNext: () => void;
  onToggleNotes: () => void;
};

const arrowSrc = "/Strive_HUD/Battle_Xrd3_tex(HUD)/Hud_Icon_Arrow.png";

export function SlideControls({
  onPrevious,
  onNext,
  onToggleNotes,
}: SlideControlsProps) {
  return (
    <nav className="nav-actions" aria-label="Controles de presentacion">
      <button
        className="icon-button"
        type="button"
        aria-label="Slide anterior"
        title="Anterior"
        onClick={onPrevious}
      >
        <Image
          className="nav-arrow-icon previous"
          src={arrowSrc}
          alt=""
          width={28}
          height={28}
        />
      </button>
      <button
        className="icon-button"
        type="button"
        aria-label="Siguiente slide"
        title="Siguiente"
        onClick={onNext}
      >
        <Image
          className="nav-arrow-icon"
          src={arrowSrc}
          alt=""
          width={28}
          height={28}
        />
      </button>
      <button
        className="icon-button"
        type="button"
        aria-label="Mostrar notas"
        title="Notas"
        onClick={onToggleNotes}
      >
        N
      </button>
    </nav>
  );
}
