"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function PowerMonitoring() {
  return (
    <Card id="power-monitoring" className="overflow-hidden">
      <CardHeader className="bg-emerald-600 text-white p-3">
        <CardTitle className="text-sm">Power Monitoring</CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="v-in-siv" className="text-xs">
              V-IN SIV
            </Label>
            <Input id="v-in-siv" value="750" className="h-8 text-sm" readOnly />
          </div>
          <div>
            <Label htmlFor="cur-in-siv" className="text-xs">
              CUR-IN SIV
            </Label>
            <Input id="cur-in-siv" value="120" className="h-8 text-sm" readOnly />
          </div>
          <div>
            <Label htmlFor="dc-link-v" className="text-xs">
              DC LINK V
            </Label>
            <Input id="dc-link-v" value="580" className="h-8 text-sm" readOnly />
          </div>
          <div>
            <Label htmlFor="dc-link-cur" className="text-xs">
              DC LINK CUR
            </Label>
            <Input id="dc-link-cur" value="95" className="h-8 text-sm" readOnly />
          </div>
          <div className="col-span-2">
            <Label htmlFor="max-power" className="text-xs">
              MAX POWER
            </Label>
            <Input id="max-power" value="1250 kW" className="h-8 text-sm" readOnly />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
