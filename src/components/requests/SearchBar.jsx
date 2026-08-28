import { Search } from "lucide-react";

export default function SearchBar({
  search,
  status,
  priority,
  statuses,
  priorities,
  onSearch,
  onStatusChange,
  onPriorityChange,
}) {
  
  const allStatuses = ["All statuses", ...statuses];
  const allPriorities = ["All priorities", ...priorities];

  return (
    <div className="request-search-bar">

      <div className="request-search-field">

        <Search className="request-search-icon"
          size={17}
        />

        <input className="request-search-input"
          type="text"
          value={search}
          onChange={(event) =>
            onSearch(event.target.value)
          }
          placeholder="Search requests, customers, or coordinators..."
        />

      </div>

      <select className="request-filter-select"
        value={status}
        onChange={(event) =>
          onStatusChange(event.target.value)
        }
      >
      {allStatuses.map((status) => (
        <option value={status} key={status}>
          {status}
        </option>
      ))}
      </select>

      <select className="request-filter-select"
        value={priority}
        onChange={(event) =>
          onPriorityChange(event.target.value)
        }
      >
      {allPriorities.map((priority) => (
        <option value={priority} key={priority}>
          {priority}
        </option>
      ))}
      </select>

    </div>
  );
}
