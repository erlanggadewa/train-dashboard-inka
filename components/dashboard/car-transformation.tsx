"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const transformationData = [
  { name: "Pantograph", value: 85 },
  { name: "SIV", value: 92 },
  { name: "VVVF", value: 88 },
  { name: "Motor", value: 90 },
  { name: "Bogie", value: 75 },
  { name: "Door", value: 65 },
  { name: "Air Conditioning", value: 70 },
]

const statusColors = {
  active: "bg-green-500",
  warning: "bg-yellow-500",
  error: "bg-red-500",
  critical: "bg-red-600",
}

export function CarTransformation() {
  return (
    <Card id="car-transformation" className="overflow-hidden">
      <CardHeader className="bg-amber-600 text-white">
        <CardTitle className="text-lg">Car Transformation</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          {transformationData.map((item) => (
            <div key={item.name}>
              <div className="mb-1 flex items-center justify-between">
                <h4 className="text-sm font-medium">{item.name}</h4>
                <span className="text-xs text-muted-foreground">{item.value}%</span>
              </div>
              <Progress
                value={item.value}
                className="h-2"
                indicatorClassName={item.value > 80 ? "bg-green-500" : item.value > 70 ? "bg-yellow-500" : "bg-red-500"}
              />
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="mb-2 text-sm font-medium">Overall Status</div>
          <div className="flex gap-2">
            <Badge variant="outline" className="flex items-center gap-1.5">
              <span className={`h-2 w-2 rounded-full ${statusColors.active}`}></span>
              Active
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1.5">
              <span className={`h-2 w-2 rounded-full ${statusColors.warning}`}></span>
              Warning
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1.5">
              <span className={`h-2 w-2 rounded-full ${statusColors.error}`}></span>
              Error
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
