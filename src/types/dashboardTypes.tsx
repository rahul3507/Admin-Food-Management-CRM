/** @format */

import { LucideIcon } from "lucide-react";

export interface AnalyticsCard {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change: number;
  changeType: "increase" | "decrease";
}
