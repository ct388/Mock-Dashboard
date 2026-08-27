import { Search } from "lucide-react";

export default function SearchBar({
  search,
  onSearch,
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

    </div>
  );
}
