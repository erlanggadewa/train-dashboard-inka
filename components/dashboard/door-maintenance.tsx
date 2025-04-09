"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function DoorMaintenance() {
  return (
    <Card id="door-maintenance" className="overflow-hidden">
      <CardHeader className="bg-cyan-600 text-white">
        <CardTitle className="text-lg">Door Maintenance</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-6">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <h4 className="text-sm font-medium">Door Left - Bar Graph</h4>
              <span className="text-xs text-muted-foreground">85%</span>
            </div>
            <Progress value={85} className="h-4" />
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between">
              <h4 className="text-sm font-medium">Door Right - Bar Graph</h4>
              <span className="text-xs text-muted-foreground">92%</span>
            </div>
            <Progress value={92} className="h-4" />
          </div>
          <div className="rounded-lg border p-3">
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
        </div>
      </CardContent>
    </Card>
  )
}
