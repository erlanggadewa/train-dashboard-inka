"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartContainer } from "../ui/chart";

export function DoorMaintenance() {
  const data = [
    {
      name: "Door 1",
      left: 2300, // Status kecepatan atau data lainnya terkait roda
      right: 1800, // Data terkait suhu atau parameter lainnya
    },
    {
      name: "Door 2",
      left: 2500,
      right: 1900,
    },
    {
      name: "Door 3",
      left: 2400,
      right: 2000,
    },
    {
      name: "Door 4",
      left: 2700,
      right: 2100,
    },
    {
      name: "Door 5",
      left: 2600,
      right: 2050,
    },
    {
      name: "Door 6",
      left: 2500,
      right: 1950,
    },
    {
      name: "Door 7",
      left: 2800,
      right: 2150,
    },
  ];

  return (
    <Card id="door-maintenance" className="overflow-hidden ">
      <CardHeader className="bg-cyan-600 text-white">
        <CardTitle className="text-lg">Door Maintenance</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <ChartContainer
          config={{
            usage: {
              label: "Door Maintenance",
              color: "teal",
            },
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="Door Left" orientation="left" stroke="teal" />
              <YAxis
                yAxisId="Door Right"
                orientation="right"
                stroke="rgb(234 179 8 / var(--tw-bg-opacity, 1))"
              />
              <Tooltip />
              <Legend />
              <Bar yAxisId="Door Left" dataKey="left" fill="teal" />
              <Bar
                yAxisId="Door Right"
                dataKey="right"
                fill="rgb(234 179 8 / var(--tw-bg-opacity, 1))"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <div className="rounded-lg border p-3 mt-3">
          <div className="mb-2 text-sm font-medium">Door Status</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
              <span className="text-xs">Left: Operational</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
              <span className="text-xs">Right: Operational</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs">Last Maintenance:</span>
              <span className="text-xs font-medium">2023-04-15</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs">Next Check:</span>
              <span className="text-xs font-medium">2023-07-15</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
