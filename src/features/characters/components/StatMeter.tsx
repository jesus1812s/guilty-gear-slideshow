type StatMeterProps = {
  label: string;
  value: number;
};

export function StatMeter({ label, value }: StatMeterProps) {
  return (
    <div className="stat-row">
      <strong>{label}</strong>
      <div className="meter" aria-label={`${label}: ${value}`}>
        <span style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
