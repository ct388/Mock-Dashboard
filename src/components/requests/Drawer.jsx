import { useEffect } from "react";
import { X } from "lucide-react";

import Timeline from "@/components/requests/Timeline";

const statusClasses = {
  "Open": "request-drawer-status-open",
  "In review": "request-drawer-status-review",
  "Waiting": "request-drawer-status-waiting",
  "Complete": "request-drawer-status-complete",
};

const priorityClasses = {
  High: "request-drawer-priority-high",
  Medium: "request-drawer-priority-medium",
  Low: "request-drawer-priority-low",
};

function getInitials(name) {
  if (name === "You") {
    return "CT" // hard-coded for current user
  }
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export default function Drawer({
  selectedRequest,
  coordinators,
  statuses,
  onClose,
  onStatusChange,
  onCoordinatorChange,
}) {
  useEffect(() => {
    if (!selectedRequest) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedRequest, onClose]);

  if (!selectedRequest) {
    return null;
  }

  return (
    <div className="request-drawer-overlay">

      <button className="request-drawer-backdrop"
        type="button"
        aria-label="Close request"
        onClick={onClose} 
      />

      <aside className="request-drawer">

        <div className="request-drawer-header">
          <div>
            <p className="request-drawer-eyebrow">
              Request #{selectedRequest.id}
            </p>

            <h2 className="request-drawer-title">
              {selectedRequest.type}
            </h2>
          </div>

          <button className="request-drawer-close"
            type="button"
            onClick={onClose}
            aria-label="Close drawer"
          >
            <X size={18} />
          </button>
        </div>

        <div className="request-drawer-content">
          <div className="request-drawer-inner">
            <section className="request-drawer-section">
              <label className="request-drawer-label">
                Customer
              </label>

              <div className="request-customer-card">
                <div className="request-customer-avatar">
                  {getInitials(selectedRequest.customer)}
                </div>

                <div>
                  <p className="request-customer-name">
                    {selectedRequest.customer}
                  </p>

                  <p className="request-customer-type">
                    Customer
                  </p>
                </div>
              </div>
            </section>

            <section className="request-drawer-section">
              <label className="request-drawer-label">
                Priority
              </label>

              <span className={`request-drawer-priority ${priorityClasses[selectedRequest.priority]}`}>
                {selectedRequest.priority}
              </span>
            </section>

            <section className="request-drawer-section">
              <label
                htmlFor="request-status"
                className="request-drawer-label"
              >
                Status
              </label>

              <select className={`request-drawer-select ${statusClasses[selectedRequest.status]}`}
                id="request-status"
                value={selectedRequest.status}
                onChange={(event) =>
                  onStatusChange(
                    selectedRequest.id,
                    event.target.value
                  )
                }
              >
                {statuses.map((status) => (
                  <option value={status} key={status} >
                    {status}
                  </option>
                ))}
              </select>
            </section>

            <section className="request-drawer-section">
              <label
                htmlFor="request-coordinator"
                className="request-drawer-label"
              >
                Coordinator
              </label>

              <div className="request-drawer-coordinator">
                <div className="request-drawer-coordinator-avatar">
                  {getInitials(selectedRequest.coordinator)}
                </div>

                <div className="request-drawer-coordinator-select">
                  <select className="request-drawer-select"
                    id="request-coordinator"
                    value={selectedRequest.coordinator}
                    onChange={(event) =>
                      onCoordinatorChange(
                        selectedRequest.id,
                        event.target.value
                      )
                    }
                  >
                    {coordinators.map((coordinator) => (
                        <option value={coordinator} key={coordinator}>
                          {coordinator}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
            </section>

            <section className="request-drawer-section">
              <label className="request-drawer-label">
                Request type
              </label>

              <p className="request-drawer-value">
                {selectedRequest.type}
              </p>
            </section>

            <section className="request-drawer-section">
              <label className="request-drawer-label">
                Last updated
              </label>

              <p className="request-drawer-value request-drawer-value-muted">
                {selectedRequest.updated}
              </p>
            </section>

            <section className="request-drawer-activity">
              <div className="request-drawer-activity-header">
                <h3 className="request-drawer-activity-title">
                  Activity Timeline
                </h3>
              </div>

              <Timeline
              />
            </section>

          </div>

        </div>

      </aside>

    </div>
  );
}
