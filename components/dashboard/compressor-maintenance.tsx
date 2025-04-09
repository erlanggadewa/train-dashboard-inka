"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { time: "00:00", usage: 20 },
  { time: "01:00", usage: 25 },
  { time: "02:00", usage: 30 },
  { time: "03:00", usage: 15 },
  { time: "04:00", usage: 73 },
  { time: "05:00", usage: 75 },
  { time: "06:00", usage: 72 },
  { time: "07:00", usage: 26 },
  { time: "08:00", usage: 10 },
  { time: "09:00", usage: 57 },
  { time: "10:00", usage: 21 },
  { time: "11:00", usage: 30 },
  { time: "12:00", usage: 35 },
  { time: "13:00", usage: 41 },
  { time: "14:00", usage: 44 },
  { time: "15:00", usage: 60 },
  { time: "16:00", usage: 43 },
  { time: "17:00", usage: 92 },
  { time: "18:00", usage: 41 },
  { time: "19:00", usage: 68 },
  { time: "20:00", usage: 54 },
  { time: "21:00", usage: 81 },
  { time: "22:00", usage: 39 },
  { time: "23:00", usage: 75 },
];

export function CompressorMaintenance() {
  return (
    <Card id="compressor-maintenance" className="overflow-hidden">
      <CardHeader className="bg-indigo-600 text-white">
        <CardTitle className="text-lg">Compressor Maintenance</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div>
          <h4 className="mb-2 text-sm font-medium">Air Usage - Histogram</h4>
          <div>
            <ChartContainer
              config={{
                usage: {
                  label: "Air Usage",
                  color: "teal",
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis
                    dataKey="time"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}A`}
                  />
                  <Tooltip />
                  <Bar
                    dataKey="usage"
                    fill="rgb(8 145 178)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
        <div className="mt-4 rounded-lg border p-3">
          <div className="mb-2 text-sm font-medium">Compressor Status</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
              <span className="text-xs">Pressure: Normal</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
              <span className="text-xs">Temperature: Normal</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs">Air Quality:</span>
              <span className="text-xs font-medium">Good</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs">Efficiency:</span>
              <span className="text-xs font-medium">95%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
