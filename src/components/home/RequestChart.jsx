import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, } from "recharts";

import { requestChartData } from "@/lib/mock-data";

export default function RequestChart() {
  return (
    <section className="request-chart">

      <div className="request-chart-header">
        <div>
          <h2 className="request-chart-title">
            Request Activity
          </h2>

          <p className="request-chart-description">
            Requests processed over the last 30 days
          </p>
        </div>
      </div>

      <div className="request-chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={requestChartData}>
            <defs>
              <linearGradient id="requestGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="#6366f1"
                  stopOpacity={0.18}
                />

                <stop
                  offset="100%"
                  stopColor="#6366f1"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#829ab1",
                fontSize: 11,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              width={30}
              tick={{
                fill: "#829ab1",
                fontSize: 11,
              }}
            />

            <Tooltip
              cursor={{
                stroke: "#d4d4d4",
                strokeDasharray: "4 4",
              }}
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #e5e5e5",
                boxShadow:
                  "0 4px 12px rgba(0,0,0,0.08)",
              }}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#6366f1"
              strokeWidth={2}
              fill="url(#requestGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
