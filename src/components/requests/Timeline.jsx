export default function Timeline({ activity }) {
  if (!activity.length) {
    return (
      <p className="request-timeline-empty">
        No activity yet.
      </p>
    );
  }

  return (
    <div className="request-timeline">
      {activity.map((item, index) => (
        <div className="request-timeline-item"
          key={`${item.text}-${item.time}-${index}`}
        >
          {index !== activity.length - 1 && (
            <div className="request-timeline-line" />
          )}

          <div className="request-timeline-node">
            <div className="request-timeline-dot" />
          </div>

          <div className="request-timeline-content">
            <p className="request-timeline-text">
              {item.text}
            </p>

            <div className="request-timeline-meta">
              <span>{item.user}</span>
              <span className="request-timeline-separator">
                •
              </span>
              <span>{item.time}</span>
            </div>
          </div>
        </div>
      ))}
      
    </div>
  );
}
