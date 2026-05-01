type SlideControlsProps = {
  onPrevious: () => void;
  onNext: () => void;
  onToggleNotes: () => void;
};

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
        Prev
      </button>
      <button
        className="icon-button"
        type="button"
        aria-label="Siguiente slide"
        title="Siguiente"
        onClick={onNext}
      >
        Next
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
