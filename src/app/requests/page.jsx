import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Header from "@/components/home/Header";
import SearchBar from "@/components/requests/SearchBar";
import Table from "@/components/requests/Table";
import Drawer from "@/components/requests/Drawer";
import '@/app/requests/page.css'
import '@/components/requests/components.css'

import { requests as initialRequests, coordinators, } from "@/lib/mock-data";

const statuses = [
  "Open",
  "Needs review",
  "Waiting",
  "Complete",
];

const priorities = [
  "High",
  "Medium",
  "Low",
];

function createActivity(text) {
  return {
    text,
    user: "You",
    time: "Just now",
  };
}

export default function RequestsPage() {
  const [searchParams] = useSearchParams();

  const [requestList, setRequestList] = useState(initialRequests);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState(
    searchParams.get("status")
      ? searchParams.get("status")
      : "All statuses"
    );

  const [priority, setPriority] = useState(
    searchParams.get("priority")
      ? searchParams.get("priority")
      : "All priorities"
    );

  const urlRequest = searchParams.get("request");  
  const [selectedRequest, setSelectedRequest] = useState(
    urlRequest
      ? initialRequests.find((req) => req.id === urlRequest)
      : null
  );

  const filteredRequests = requestList.filter(
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
        status === "All statuses" ||
        request.status === status;

      const matchesPriority =
        priority === "All priorities" ||
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

  function handleStatusChange(
    requestId,
    newStatus
  ) {
    setRequestList((current) =>
      current.map((request) => {
        if (request.id !== requestId) {
          return request;
        }

        if (request.status === newStatus) {
          return request;
        }

        const updatedRequest = {
          ...request,
          status: newStatus,
          updated: "Just now",

          activity: [
            createActivity(
              `Request moved to ${newStatus}`
            ),
            ...request.activity,
          ],
        };

        setSelectedRequest(updatedRequest);

        return updatedRequest;
      })
    );
  }

  function handleCoordinatorChange(
    requestId,
    newCoordinator
  ) {
    setRequestList((current) =>
      current.map((request) => {
        if (request.id !== requestId) {
          return request;
        }

        if (
          request.coordinator ===
          newCoordinator
        ) {
          return request;
        }

        const updatedRequest = {
          ...request,
          coordinator: newCoordinator,
          updated: "Just now",

          activity: [
            createActivity(
              `Request assigned to ${newCoordinator}`
            ),
            ...request.activity,
          ],
        };

        setSelectedRequest(updatedRequest);

        return updatedRequest;
      })
    );
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
            statuses={statuses}
            priorities={priorities}
            onSearch={handleSearch}
            onStatusChange={handleStatusFilterChange}
            onPriorityChange={handlePriorityFilterChange}
          />
        </div>

        <div className="requests-page-table">
          <Table
            requests={filteredRequests}
            onOpenRequest={setSelectedRequest}
          />
        </div>

      </div>

      <Drawer
        selectedRequest={selectedRequest}
        coordinators={coordinators}
        statuses={statuses}
        onClose={() =>
          setSelectedRequest(null)
        }
        onStatusChange={handleStatusChange}
        onCoordinatorChange={handleCoordinatorChange}
      />

    </main>
  );
}
