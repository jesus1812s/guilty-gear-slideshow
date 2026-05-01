type SpeakerNotesProps = {
  isOpen: boolean;
  notes: string;
};

export function SpeakerNotes({ isOpen, notes }: SpeakerNotesProps) {
  return (
    <aside
      className={`speaker-notes ${isOpen ? "is-open" : ""}`}
      aria-label="Notas del presentador"
    >
      <h3>Notas</h3>
      <p>{notes}</p>
    </aside>
  );
}
