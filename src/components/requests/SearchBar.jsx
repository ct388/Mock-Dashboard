import { Search } from "lucide-react";

export default function SearchBar({
  search,
  status,
  priority,
  onSearch,
  onStatusChange,
  onPriorityChange,
}) {
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
        <option value="All">
          All statuses
        </option>

        <option value="Open">
          Open
        </option>

        <option value="In review">
          In review
        </option>

        <option value="Waiting">
          Waiting
        </option>

        <option value="Complete">
          Complete
        </option>
      </select>

      <select className="request-filter-select"
        value={priority}
        onChange={(event) =>
          onPriorityChange(event.target.value)
        }
      >
        <option value="All">
          All priorities
        </option>

        <option value="High">
          High
        </option>

        <option value="Medium">
          Medium
        </option>

        <option value="Low">
          Low
        </option>
      </select>

    </div>
  );
}
