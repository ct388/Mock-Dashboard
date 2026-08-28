import { ArrowRight } from "lucide-react";

import { requests } from "@/lib/mock-data";

export default function AttentionPanel() {
  const severityStyles = {
      High: "attention-panel-severity--high",
      Medium: "attention-panel-severity--medium",
      Low: "attention-panel-severity--low",
  };

  const actionItems = requests.filter(req => req.coordinator === "You");

  return (
    <section className="attention-panel">

      <div className="attention-panel-header">
        <div>
          <h2 className="attention-panel-title">
            Assigned to You
          </h2>
        </div>

        <span className="attention-panel-count">
          {actionItems.length} items
        </span>
      </div>

      <div className="attention-panel-list">
        {actionItems.map((item) => (
          <button className="attention-panel-item"
            key={item.id}
          >
            <span
              className={`attention-panel-severity ${severityStyles[item.priority]}`}
            />

            <div className="attention-panel-item-content">
              <p className="attention-panel-item-title">
                {item.id} : {item.status}
              </p>

              <p className="attention-panel-item-description">
                {item.activity[0].text}
              </p>
            </div>

            <ArrowRight className="attention-panel-arrow"
              size={15}
            />
          </button>
        ))}
      </div>
     
      <footer>
        <button className="attention-footer">
          View All Requests
        </button>
      </footer>
    </section>
  );
}
