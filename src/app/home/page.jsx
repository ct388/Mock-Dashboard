import { Users, ClipboardList, CheckCircle2, UserRound, } from "lucide-react";

import Header from "@/components/home/Header";
import KPICard from "@/components/home/KPICard";
import RequestChart from "@/components/home/RequestChart";
import AttentionPanel from "@/components/home/AttentionPanel";

import { homePageKPIData, requests } from "@/lib/mock-data";

import '@/app/home/page.css'
import '@/components/home/components.css'

export default function HomePage() {

  const KPICardIcons = {
    "Open Requests": Users,
    "In Review": ClipboardList,
    "Waiting": CheckCircle2,
    "Complete Requests": UserRound,
  };

  const KPICardValues = {
    "Open Requests": requests.filter(req => req.status === "Open").length,
    "In Review": requests.filter(req => req.status === "In Review").length,
    "Waiting": requests.filter(req => req.status === "Waiting").length,
    "Complete Requests": requests.filter(req => req.status === "Complete").length,
  };

  return (
    <main className="home-page">
      <div className="home-page-container">
        <Header 
          date="Monday, August 24"
          title="Good afternoon, Cindy"
        />

        <section className="home-page-kpis">
          {homePageKPIData.map((card) => (
            <KPICard
              key={card.label}
              {...card}
              icon={KPICardIcons[card.label]}
              value={KPICardValues[card.label]}
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
