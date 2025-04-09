"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { time: "00:00", current: 28 },
  { time: "01:00", current: 27 },
  { time: "02:00", current: 16 },
  { time: "03:00", current: 20 },
  { time: "04:00", current: 9 },
  { time: "05:00", current: 33 },
  { time: "06:00", current: 19 },
  { time: "07:00", current: 52 },
  { time: "08:00", current: 46 },
  { time: "09:00", current: 55 },
  { time: "10:00", current: 54 },
  { time: "11:00", current: 42 },
  { time: "12:00", current: 100 },
  { time: "13:00", current: 54 },
  { time: "14:00", current: 19 },
  { time: "15:00", current: 23 },
  { time: "16:00", current: 93 },
  { time: "17:00", current: 79 },
  { time: "18:00", current: 35 },
  { time: "19:00", current: 85 },
  { time: "20:00", current: 52 },
  { time: "21:00", current: 50 },
  { time: "22:00", current: 22 },
  { time: "23:00", current: 26 },
];

export function EnergyMeter() {
  return (
    <Card id="energy-meter" className="overflow-hidden">
      <CardHeader className="bg-teal-600 text-white">
        <CardTitle className="text-lg">Energy Meter</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="dc-volt">DC Volt</Label>
            <Input id="dc-volt" value="750" readOnly />
          </div>
          <div>
            <Label htmlFor="power-hour">Power/Hour</Label>
            <Input id="power-hour" value="1250 kW" readOnly />
          </div>
          <div>
            <Label htmlFor="phase-volt">3 Phase Volt</Label>
            <Input id="phase-volt" value="380" readOnly />
          </div>
          <div>
            <Label htmlFor="efficiency">Efficiency</Label>
            <Input id="efficiency" value="92%" readOnly />
          </div>
        </div>
        <div className="mt-4">
          <h4 className="mb-2 text-sm font-medium">Current/Time Histogram</h4>
          <div>
            <ChartContainer
              config={{
                current: {
                  label: "Current",
                  color: "teal",
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
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

                  <Bar dataKey="current" fill="teal" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
