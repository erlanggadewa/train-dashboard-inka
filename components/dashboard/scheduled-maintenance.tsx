"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function ScheduledMaintenance() {
  return (
    <Card id="scheduled-maintenance" className="overflow-hidden">
      <CardHeader className="bg-purple-600 text-white">
        <CardTitle className="text-lg">Scheduled Maintenance</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div>
            <Label htmlFor="date-time">Date-Time</Label>
            <Input id="date-time" type="datetime-local" />
          </div>
          <div>
            <Label htmlFor="parts">Parts</Label>
            <Input id="parts" placeholder="Enter parts for maintenance" />
          </div>
          <div>
            <Label htmlFor="detail">Detail</Label>
            <Textarea id="detail" placeholder="Enter maintenance details" className="min-h-[100px]" />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline">Cancel</Button>
            <Button>Schedule</Button>
          </div>
        </div>
        <div className="mt-4 rounded-lg border p-3">
          <div className="mb-2 text-sm font-medium">Next Scheduled Maintenance</div>
          <div className="grid gap-1 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date:</span>
              <span>2023-07-15 09:00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Parts:</span>
              <span>Bogie, Brakes</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Status:</span>
              <span className="font-medium text-amber-600">Pending</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
