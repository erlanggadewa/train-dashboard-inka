"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const statusColors = {
  active: "bg-green-500",
  warning: "bg-yellow-500",
  error: "bg-red-500",
  critical: "bg-red-600",
};

const powerData = [
  {
    id: "siv",
    name: "SIV",
    set: "750",
    operate: "748",
    flt: "0",
    rh: "24",
    temp: "65",
    unit: "V",
    status: "active",
  },
  {
    id: "vvvf",
    name: "VVVF",
    set: "380",
    operate: "375",
    flt: "0",
    rh: "24",
    temp: "72",
    unit: "V",
    status: "active",
  },
  {
    id: "pant",
    name: "PANT",
    set: "25",
    operate: "24.5",
    flt: "0",
    rh: "24",
    temp: "68",
    unit: "kV",
    status: "warning",
  },
];

export function PowerMaintenance() {
  return (
    <Card id="power-maintenance" className="overflow-hidden">
      <CardHeader className="bg-blue-600 text-white">
        <CardTitle className="text-lg">Power Maintenance</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        {/* Desktop table - hidden on small screens */}
        <div className="hidden md:block">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Day</TableHead>
                <TableHead>Set</TableHead>
                <TableHead>Ope</TableHead>
                <TableHead>FLT</TableHead>
                <TableHead>R/H</TableHead>
                <TableHead>Temp</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {powerData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.set}</TableCell>
                  <TableCell>{item.operate}</TableCell>
                  <TableCell>{item.flt}</TableCell>
                  <TableCell>{item.rh}</TableCell>
                  <TableCell>{item.temp}</TableCell>
                  <TableCell>{item.unit}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1.5"
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          statusColors[item.status]
                        }`}
                      ></span>
                      {item.status.charAt(0).toUpperCase() +
                        item.status.slice(1)}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile-friendly card layout - shown only on small screens */}
        <div className="space-y-4 md:hidden">
          {powerData.map((item) => (
            <div key={item.id} className="rounded-lg border p-3">
              <div className="mb-2 font-medium">{item.name}</div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Set:</span>
                  <span>
                    {item.set} {item.unit}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ope:</span>
                  <span>{item.operate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">FLT:</span>
                  <span>{item.flt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">R/H:</span>
                  <span>{item.rh}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Temp:</span>
                  <span>{item.temp}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1.5"
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        statusColors[item.status]
                      }`}
                    ></span>
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="my-4">
          <div className="mb-2 text-sm font-medium">Status Log</div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="flex items-center gap-1.5">
              <span
                className={`h-2 w-2 rounded-full ${statusColors.active}`}
              ></span>
              Active
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1.5">
              <span
                className={`h-2 w-2 rounded-full ${statusColors.warning}`}
              ></span>
              Warning
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1.5">
              <span
                className={`h-2 w-2 rounded-full ${statusColors.error}`}
              ></span>
              Error
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1.5">
              <span
                className={`h-2 w-2 rounded-full ${statusColors.critical}`}
              ></span>
              Critical
            </Badge>
          </div>
        </div>
        <div className="flex-1 space-y-3">
          <div>
            <Label htmlFor="log" className="flex items-center gap-2">
              LOG
              <Input
                id="log"
                value="Log kereta"
                className="h-9 mt-2"
                readOnly
              />
            </Label>
          </div>
          <div>
            <Label htmlFor="act" className="flex items-center gap-2">
              ACT
              <Input
                id="act"
                value="Act Kereta"
                className="h-9 mt-2"
                readOnly
              />
            </Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
