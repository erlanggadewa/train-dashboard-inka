"use client"

import { Sheet, SheetContent } from "@/components/ui/sheet"

interface MobileNavProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-72">
        <div className="flex flex-col gap-4 py-4">
          <div className="flex items-center gap-2 px-2">
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
            <h2 className="text-lg font-semibold">Train Monitoring</h2>
          </div>
          <nav className="grid gap-1 px-2">
            <a
              href="#energy-meter"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
              onClick={() => onOpenChange(false)}
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
                <path d="M12 2v20"></path>
                <path d="m17 5-5-3-5 3"></path>
                <path d="m17 19-5 3-5-3"></path>
                <path d="M12 10 7 7"></path>
                <path d="m12 10 5-3"></path>
                <path d="m12 14 5-3"></path>
                <path d="m12 14-5-3"></path>
              </svg>
              Energy Meter
            </a>
            <a
              href="#power-maintenance"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
              onClick={() => onOpenChange(false)}
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
                <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
                <path d="M18 8h4v8h-4"></path>
                <path d="m15 12-5.5-3.5"></path>
                <path d="M10 8.5V15"></path>
              </svg>
              Power Maintenance
            </a>
            <a
              href="#door-maintenance"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
              onClick={() => onOpenChange(false)}
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
                <path d="M13 4h3a2 2 0 0 1 2 2v14"></path>
                <path d="M2 20h3"></path>
                <path d="M13 20h9"></path>
                <path d="M10 12v.01"></path>
                <path d="M16 4v16"></path>
                <path d="M5 20v-4a2 2 0 0 1 2-2h6"></path>
                <path d="M5 13V4h8"></path>
              </svg>
              Door Maintenance
            </a>
            <a
              href="#compressor-maintenance"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
              onClick={() => onOpenChange(false)}
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
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <path d="M8 18v4"></path>
                <path d="M16 18v4"></path>
                <rect width="16" height="12" x="4" y="6" rx="2"></rect>
              </svg>
              Compressor Maintenance
            </a>
            <a
              href="#car-transformation"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
              onClick={() => onOpenChange(false)}
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
                <path d="M4 22h16a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2Z"></path>
                <path d="M5 9V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"></path>
                <path d="M8 22v-4"></path>
                <path d="M16 22v-4"></path>
                <path d="M9 9h6"></path>
              </svg>
              Car Transformation
            </a>
            <a
              href="#speed-location"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
              onClick={() => onOpenChange(false)}
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
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m16 12-4-4-4 4"></path>
                <path d="M12 16V8"></path>
              </svg>
              Speed & Location
            </a>
            <a
              href="#railway-map"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
              onClick={() => onOpenChange(false)}
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
                <path d="M3 7h18"></path>
                <path d="M6 7v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"></path>
                <path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                <path d="M9 16h.01"></path>
                <path d="M15 16h.01"></path>
              </svg>
              Railway Map
            </a>
            <a
              href="#scheduled-maintenance"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
              onClick={() => onOpenChange(false)}
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
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                <line x1="16" x2="16" y1="2" y2="6"></line>
                <line x1="8" x2="8" y1="2" y2="6"></line>
                <line x1="3" x2="21" y1="10" y2="10"></line>
                <path d="M8 14h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M16 14h.01"></path>
                <path d="M8 18h.01"></path>
                <path d="M12 18h.01"></path>
                <path d="M16 18h.01"></path>
              </svg>
              Scheduled Maintenance
            </a>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
