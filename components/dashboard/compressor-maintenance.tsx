"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer } from "@/components/ui/chart"

const data = [
  { time: "00:00", usage: 20 },
  { time: "01:00", usage: 25 },
  { time: "02:00", usage: 30 },
  { time: "03:00", usage: 22 },
  { time: "04:00", usage: 18 },
  { time: "05:00", usage: 15 },
  { time: "06:00", usage: 25 },
  { time: "07:00", usage: 30 },
]

export function CompressorMaintenance() {
  return (
    <Card id="compressor-maintenance" className="overflow-hidden">
      <CardHeader className="bg-indigo-600 text-white">
        <CardTitle className="text-lg">Compressor Maintenance</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div>
          <h4 className="mb-2 text-sm font-medium">Air Usage - Histogram</h4>
          <div className="h-[200px]">
            <ChartContainer
              config={{
                usage: {
                  label: "Air Usage",
                  color: "hsl(var(--chart-1))",
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <XAxis dataKey="time" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                  <Area
                    type="monotone"
                    dataKey="usage"
                    stroke="var(--color-usage)"
                    fill="var(--color-usage)"
                    fillOpacity={0.2}
                  />
                </AreaChart>
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
  )
}
