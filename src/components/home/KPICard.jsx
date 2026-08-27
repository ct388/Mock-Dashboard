export default function KPICard({
  label,
  change,
  direction,
  description,
  icon, 
  value,
}) {
  const positive = direction === "up";
  const negative = direction === "down";

  const Icon = icon;

  return (
    <button className="kpi-card">

      <div className="kpi-card-header">
        <p className="kpi-card-label">
          {label}
        </p>

        <div className="kpi-card-icon">
          {icon && <Icon size={16} />}
        </div>
      </div>

      <div className="kpi-card-value-row">
        <p className="kpi-card-value">
          {value}
        </p>

        <span
          className={`kpi-card-change ${
            positive
              ? "kpi-card-change--positive"
              : negative
                ? "kpi-card-change--negative"
                : ""
          }`}
        >
          {positive
              ? "↑"
              : negative
                ? "↓"
                : ""
          } {change}
        </span>
        
        <p className="kpi-card-description">
        {description}
        </p>
      </div>
    </button>
  );
}
