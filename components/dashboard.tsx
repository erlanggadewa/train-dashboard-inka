"use client";
import { BogieMonitoring } from "@/components/dashboard/bogie-monitoring";
import { CarTransformation } from "@/components/dashboard/car-transformation";
import { CompressorMaintenance } from "@/components/dashboard/compressor-maintenance";
import { DoorMaintenance } from "@/components/dashboard/door-maintenance";
import { EnergyMeter } from "@/components/dashboard/energy-meter";
import { PowerMaintenance } from "@/components/dashboard/power-maintenance";
import { PowerMonitoring } from "@/components/dashboard/power-monitoring";
import { ScheduledMaintenance } from "@/components/dashboard/scheduled-maintenance";
import { SpeedLocation } from "@/components/dashboard/speed-location";
import { MobileNav } from "@/components/mobile-nav";
import { useState } from "react";
import { RailwayMap } from "./dashboard/railway-map";

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
            width="40px"
            height="40px"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--twemoji"
            preserveAspectRatio="xMidYMid meet"
          >
            <path fill="#A7A9AC" d="M2 36h32L23 19H13z"></path>
            <path fill="#58595B" d="M5 36h26L21 19h-6z"></path>
            <path fill="#808285" d="M8 36h20l-9-17h-2z"></path>
            <path
              fill="#A7A9AC"
              d="M28 35a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1zm-2-4a1 1 0 0 1-1 1H11a1 1 0 1 1 0-2h14a1 1 0 0 1 1 1z"
            ></path>
            <path
              fill="#58595B"
              d="M27.076 25.3L23 19H13l-4.076 6.3c1.889 2.517 4.798 4.699 9.076 4.699c4.277 0 7.188-2.183 9.076-4.699z"
            ></path>
            <path
              fill="#A7A9AC"
              d="M18 0C9 0 6 3 6 9v8c0 1.999 3 11 12 11s12-9.001 12-11V9c0-6-3-9-12-9z"
            ></path>
            <path
              fill="#E6E7E8"
              d="M8 11C8 2 12.477 1 18 1s10 1 10 10c0 6-4.477 11-10 11c-5.523-.001-10-5-10-11z"
            ></path>
            <path
              fill="#FFAC33"
              d="M18 21.999c1.642 0 3.185-.45 4.553-1.228C21.77 19.729 20.03 19 18 19s-3.769.729-4.552 1.772c1.366.777 2.911 1.227 4.552 1.227z"
            ></path>
            <path
              d="M19 4.997v4.965c3.488-.232 6-1.621 6-2.463V5.833c0-.791-3.692-.838-6-.836zm-2 0c-2.308-.002-6 .044-6 .836V7.5c0 .842 2.512 2.231 6 2.463V4.997z"
              fill="#55ACEE"
            ></path>
            <path
              fill="#269"
              d="M6 10s0 3 4 9c0 0-4-2-4-6v-3zm24 0s0 3-4 9c0 0 4-2 4-6v-3z"
            ></path>
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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <PowerMaintenance />
              <DoorMaintenance />
              <PowerMonitoring />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <EnergyMeter />
              <CompressorMaintenance />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <CarTransformation />
              <div className="grid gap-6">
                {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <PowerMonitoring />
                  </div> */}
                <BogieMonitoring />
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
