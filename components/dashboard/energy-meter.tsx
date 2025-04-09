"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer } from "@/components/ui/chart"

const data = [
  { time: "00:00", current: 40 },
  { time: "01:00", current: 30 },
  { time: "02:00", current: 20 },
  { time: "03:00", current: 27 },
  { time: "04:00", current: 18 },
  { time: "05:00", current: 23 },
  { time: "06:00", current: 34 },
  { time: "07:00", current: 45 },
]

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
          <div className="h-40">
            <ChartContainer
              config={{
                current: {
                  label: "Current",
                  color: "hsl(var(--chart-1))",
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="time" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}A`} />
                  <Bar dataKey="current" fill="var(--color-current)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
