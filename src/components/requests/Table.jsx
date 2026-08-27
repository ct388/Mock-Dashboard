import { Search } from "lucide-react";

const statusClasses = {
  "Open": "request-status-open",
  "In review": "request-status-review",
  "Waiting": "request-status-waiting",
  "Complete": "request-status-complete",
};

const priorityClasses = {
  High: "request-priority-high",
  Medium: "request-priority-medium",
  Low: "request-priority-low",
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

export default function Table({
  requests,
  onOpenRequest,
}) {
  if (requests.length === 0) {
    return (
      <div className="request-table-empty">

        <div className="request-table-empty-icon">
          <Search size={20} strokeWidth={1.8} />
        </div>

        <h3 className="request-table-empty-title">
          No requests found
        </h3>

        <p className="request-table-empty-description">
          Try adjusting your search or filters.
        </p>

      </div>
    );
  }

  return (
    <div className="request-table-card">

      <div className="request-table-scroll">

        <table className="request-table">

          <thead>
            <tr>
              <th>Request</th>
              <th>Customer</th>
              <th>Type</th>
              <th>Priority</th>
              <th>Coordinator</th>
              <th>Status</th>
              <th>Updated</th>
            </tr>
          </thead>

          <tbody>

            {requests.map((request) => (
              <tr
                key={request.id}
                onClick={() =>
                  onOpenRequest(request)
                }
              >

                <td>
                  <span className="request-table-id">
                    #{request.id}
                  </span>
                </td>

                <td>
                  <span className="request-table-customer">
                    {request.customer}
                  </span>
                </td>

                <td>
                  <span className="request-table-type">
                    {request.type}
                  </span>
                </td>

                <td>
                  <span className={`request-priority ${priorityClasses[request.priority]}`}>
                    {request.priority}
                  </span>
                </td>

                <td>
                  <div className="request-coordinator">

                    <div className="request-coordinator-avatar">
                      {getInitials(request.coordinator)}
                    </div>

                    <span className="request-coordinator-name">
                      {request.coordinator}
                    </span>

                  </div>
                </td>

                <td>
                  <span className={`request-status ${statusClasses[request.status]}`}>
                    {request.status}
                  </span>
                </td>

                <td>
                  <span className="request-table-updated">
                    {request.updated}
                  </span>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}
