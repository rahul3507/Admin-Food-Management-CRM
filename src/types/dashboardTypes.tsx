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

export interface OrdersChartData {
  day: string;
  pending: number;
  delivered: number;
}

export interface TopRestaurant {
  id: string;
  userId: string;
  cookingTime: string;
  location: string;
  rating: number;
}
