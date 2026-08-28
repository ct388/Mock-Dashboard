import { CirclePlus, Eye, Clock, CircleCheck, } from "lucide-react";

import Header from "@/components/home/Header";
import KPICard from "@/components/home/KPICard";
import RequestChart from "@/components/home/RequestChart";
import AttentionPanel from "@/components/home/AttentionPanel";

import { homePageKPIData, requests } from "@/lib/mock-data";

import '@/app/home/page.css'
import '@/components/home/components.css'

export default function HomePage() {
  const statuses = {
    "Open Requests": "Open",
    "Needs Review": "Needs review",
    "Waiting": "Waiting",
    "Complete Requests": "Complete",
};

  const KPICardIcons = {
    "Open Requests": CirclePlus,
    "Needs Review": Eye,
    "Waiting": Clock,
    "Complete Requests": CircleCheck,
  };

  const KPICardValues = {
    "Open Requests": requests.filter(req => req.status === "Open").length,
    "Needs Review": requests.filter(req => req.status === "Needs review").length,
    "Waiting": requests.filter(req => req.status === "Waiting").length,
    "Complete Requests": requests.filter(req => req.status === "Complete").length,
  };

  return (
    <main className="home-page">
      <div className="home-page-container">
        <Header 
          date="Monday, August 24"
          title="Good afternoon"
        />

        <section className="home-page-kpis">
          {homePageKPIData.map((card) => (
            <KPICard
              key={card.label}
              {...card}
              icon={KPICardIcons[card.label]}
              value={KPICardValues[card.label]}
              link={`/requests?status=${statuses[card.label]}`}
            />
          ))}
        </section>

        <section className="home-page-content">
          <RequestChart/> {/* this is hardcoded data, only KPI cards and Needs Attention Panel are connected to Requests Page */}
          <AttentionPanel/>
        </section>
      </div>
    </main>
  );
}
