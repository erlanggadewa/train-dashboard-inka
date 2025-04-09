"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function BogieMonitoring() {
  return (
    <Card id="bogie-monitoring" className="overflow-hidden">
      <CardHeader className="bg-orange-600 text-white p-3">
        <CardTitle className="text-sm">Bogie Monitoring</CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="bearing-temp" className="text-xs">
              BEARING TEMP
            </Label>
            <Input id="bearing-temp" value="65°C" className="h-8 text-sm" readOnly />
          </div>
          <div>
            <Label htmlFor="bearing-fail" className="text-xs">
              BEARING FAIL
            </Label>
            <Input id="bearing-fail" value="No" className="h-8 text-sm" readOnly />
          </div>
          <div>
            <Label htmlFor="derailment" className="text-xs">
              DERAILMENT
            </Label>
            <Input id="derailment" value="No" className="h-8 text-sm" readOnly />
          </div>
          <div>
            <Label htmlFor="wheel-dia" className="text-xs">
              WHEEL DIA
            </Label>
            <Input id="wheel-dia" value="920mm" className="h-8 text-sm" readOnly />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
