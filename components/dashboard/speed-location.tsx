"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function SpeedLocation() {
  return (
    <Card id="speed-location" className="overflow-hidden">
      <CardHeader className="bg-lime-600 text-white p-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm">Speed & Location</CardTitle>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-white/20 text-white hover:bg-white/30">
              B1-B7
            </Badge>
            <Badge variant="outline" className="bg-white/20 text-white hover:bg-white/30">
              P1-P7
            </Badge>
            <Badge variant="outline" className="bg-white/20 text-white hover:bg-white/30">
              EB
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-col items-center md:flex-row md:gap-6">
          <div className="relative mb-4 flex h-40 w-40 items-center justify-center rounded-full border-8 border-lime-100 bg-lime-500 text-white md:mb-0">
            <div className="text-center">
              <div className="text-4xl font-bold">25</div>
              <div className="text-sm">KMH</div>
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-lime-500"></div>
          </div>
          <div className="flex-1 space-y-3">
            <div>
              <Label htmlFor="longitude" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                  <line x1="9" x2="9" y1="3" y2="18"></line>
                  <line x1="15" x2="15" y1="6" y2="21"></line>
                </svg>
                Longitude
              </Label>
              <Input id="longitude" value="35.6895" className="h-9" readOnly />
            </div>
            <div>
              <Label htmlFor="latitude" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                  <line x1="9" x2="9" y1="3" y2="18"></line>
                  <line x1="15" x2="15" y1="6" y2="21"></line>
                </svg>
                Latitude
              </Label>
              <Input id="latitude" value="139.6917" className="h-9" readOnly />
            </div>
            <div>
              <Label htmlFor="travel-dist" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M12 2v8"></path>
                  <path d="m4.93 10.93 1.41 1.41"></path>
                  <path d="M2 18h2"></path>
                  <path d="M20 18h2"></path>
                  <path d="m19.07 10.93-1.41 1.41"></path>
                  <path d="M22 22H2"></path>
                  <path d="m16 6-4 4-4-4"></path>
                  <path d="M16 18a4 4 0 0 0-8 0"></path>
                </svg>
                Travel Distance
              </Label>
              <Input id="travel-dist" value="127.5 km" className="h-9" readOnly />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="mb-2 text-sm font-medium">Air Pressure Bar</div>
          <div className="h-2 w-full rounded-full bg-gray-200">
            <div className="h-2 rounded-full bg-lime-500" style={{ width: "65%" }}></div>
          </div>
          <div className="mt-1 flex justify-between text-xs text-muted-foreground">
            <span>0</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
