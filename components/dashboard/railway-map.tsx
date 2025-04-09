"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RailwayMap() {
  return (
    <Card id="railway-map" className="overflow-hidden">
      <CardHeader className="bg-sky-600 text-white">
        <CardTitle className="text-lg">Railway Map</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="aspect-video bg-sky-50 p-4">
          <div className="flex h-full flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-12 w-12 text-sky-300"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
              <path d="M2 12h20"></path>
            </svg>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Interactive railway map would be displayed here, showing the current train location and route.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
