type ProgressBarProps = {
  activeSlide: number;
  slideCount: number;
};

export function ProgressBar({ activeSlide, slideCount }: ProgressBarProps) {
  return (
    <section className="progress" aria-label="Progreso">
      <div
        className="progress-fill"
        style={{ width: `${((activeSlide + 1) / slideCount) * 100}%` }}
      />
    </section>
  );
}
