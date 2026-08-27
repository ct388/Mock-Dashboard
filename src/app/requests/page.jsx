import { useState } from "react";

import Header from "@/components/home/Header";
import SearchBar from "@/components/requests/SearchBar";
import Table from "@/components/requests/Table";
import '@/app/requests/page.css'
import '@/components/requests/components.css'

import { requests } from "@/lib/mock-data";

export default function RequestsPage() {

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("All");

  const [priority, setPriority] = useState("All");


  const filteredRequests = requests.filter(
    (request) => {
      const query = search
        .trim()
        .toLowerCase();

      const matchesSearch =
        !query ||
        request.id
          .toLowerCase()
          .includes(query) ||
        request.customer
          .toLowerCase()
          .includes(query) ||
        request.type
          .toLowerCase()
          .includes(query) ||
        request.coordinator
          .toLowerCase()
          .includes(query);

      const matchesStatus =
        status === "All" ||
        request.status === status;

      const matchesPriority =
        priority === "All" ||
        request.priority === priority;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority
      );
    }
  );

  function handleSearch(value) {
    setSearch(value);
  }

  function handleStatusFilterChange(value) {
    setStatus(value);
  }

  function handlePriorityFilterChange(value) {
    setPriority(value);
  }

  return (
    <main className="requests-page">

      <div className="requests-page-container">

        <Header 
          date="Monday, August 24"
          title="All Requests"
        />

        <div className="requests-page-search">
          <SearchBar
            search={search}
            status={status}
            priority={priority}
            onSearch={handleSearch}
            onStatusChange={handleStatusFilterChange}
            onPriorityChange={handlePriorityFilterChange}
          />
        </div>

        <div className="requests-page-table">
          <Table
            requests={filteredRequests}
          />
        </div>

      </div>

    </main>
  );
}
