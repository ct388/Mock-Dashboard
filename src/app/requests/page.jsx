import { useState } from "react";

import Header from "@/components/home/Header";
import SearchBar from "@/components/requests/SearchBar";
import Table from "@/components/requests/Table";
import '@/app/requests/page.css'
import '@/components/requests/components.css'

import { requests } from "@/lib/mock-data";

export default function RequestsPage() {

  const [search, setSearch] = useState("");

  function handleSearch(value) {
    setSearch(value);
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
            onSearch={handleSearch}
          />
        </div>

        <div className="requests-page-table">
          <Table
            requests={requests}
          />
        </div>

      </div>

    </main>
  );
}
