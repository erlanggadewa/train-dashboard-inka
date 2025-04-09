"use client";

import { BogieMonitoring } from "@/components/dashboard/bogie-monitoring";
import { CarTransformation } from "@/components/dashboard/car-transformation";
import { CompressorMaintenance } from "@/components/dashboard/compressor-maintenance";
import { DoorMaintenance } from "@/components/dashboard/door-maintenance";
import { EnergyMeter } from "@/components/dashboard/energy-meter";
import { PowerMaintenance } from "@/components/dashboard/power-maintenance";
import { PowerMonitoring } from "@/components/dashboard/power-monitoring";
import { RailwayMap } from "@/components/dashboard/railway-map";
import { ScheduledMaintenance } from "@/components/dashboard/scheduled-maintenance";
import { SpeedLocation } from "@/components/dashboard/speed-location";
import { MobileNav } from "@/components/mobile-nav";
import { useState } from "react";

export default function Dashboard() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <button
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9 md:hidden"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
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
            className="h-4 w-4"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
          <span className="sr-only">Toggle navigation menu</span>
        </button>
        <div className="flex items-center gap-2">
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
            className="h-6 w-6"
          >
            <path d="M4 11a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"></path>
            <path d="M8 10V8a4 4 0 0 1 8 0v2"></path>
            <path d="M8 15h0"></path>
            <path d="M12 15h0"></path>
            <path d="M16 15h0"></path>
          </svg>
          <h1 className="text-xl font-semibold">Train Monitoring System</h1>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="hidden md:inline-block">Last updated:</span>
            <span
              className="font-medium text-foreground"
              suppressHydrationWarning={true}
            >
              {new Date().toLocaleTimeString()}
            </span>
          </div>
        </div>
      </header>
      <MobileNav open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen} />
      <div className="flex-1">
        <div className="container mx-auto p-4 md:p-6">
          <div className="grid gap-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <EnergyMeter />
              <PowerMaintenance />
              <DoorMaintenance />
              <CompressorMaintenance />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <CarTransformation />
              <div className="grid gap-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <PowerMonitoring />
                  <BogieMonitoring />
                </div>
                <SpeedLocation />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <RailwayMap />
              </div>
              <ScheduledMaintenance />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
