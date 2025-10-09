/** @format */

import { LucideIcon } from "lucide-react";

export interface AnalyticsCard {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change: number;
  changeType: "increase" | "decrease";
}

export interface ChartData {
  name: string;
  value: number;
}

export interface TopSellingItem {
  id: string;
  name: string;
  image: string;
  orders: number;
}
