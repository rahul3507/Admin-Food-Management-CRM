/** @format */

import {
  AnalyticsCard,
  ChartData,
  TopSellingItem,
} from "@/types/dashboardTypes";
import { CircleDollarSign, CreditCard, Handbag, Users } from "lucide-react";

export const analyticsData: AnalyticsCard[] = [
  {
    title: "Total Income",
    value: "342,247",
    icon: CircleDollarSign,
    change: 6.8,
    changeType: "increase",
  },
  {
    title: "Per Day Income",
    value: "12,145",
    icon: CreditCard,
    change: 2.4,
    changeType: "decrease",
  },
  {
    title: "Per Day Orders",
    value: "214.00",
    icon: Handbag,
    change: 2.8,
    changeType: "increase",
  },
  {
    title: "Customers",
    value: "2.14K",
    icon: Users,
    change: 5.3,
    changeType: "increase",
  },
];

export const chartData: ChartData[] = [
  { name: "Jan", value: 35000 },
  { name: "Feb", value: 52000 },
  { name: "Mar", value: 48000 },
  { name: "Apr", value: 45000 },
  { name: "May", value: 75000 },
  { name: "Jun", value: 32000 },
  { name: "Jul", value: 65000 },
  { name: "Aug", value: 28000 },
  { name: "Sep", value: 22000 },
  { name: "Oct", value: 38000 },
  { name: "Nov", value: 35000 },
  { name: "Dec", value: 42000 },
];

export const topSellingItems: TopSellingItem[] = [
  {
    id: "1",
    name: "Chees Burger",
    image: "/foodCategoriesImages/burger.png",
    orders: 150,
  },
  {
    id: "2",
    name: "Pizza Peperoni",
    image: "/foodCategoriesImages/pizza.png",
    orders: 120,
  },
  {
    id: "3",
    name: "Pizza Steake",
    image: "/foodCategoriesImages/pizza2.png",
    orders: 110,
  },
  {
    id: "4",
    name: "Burger Deluxe",
    image: "/foodCategoriesImages/burger2.png",
    orders: 98,
  },
  {
    id: "5",
    name: "Pizza Margherita",
    image: "/foodCategoriesImages/pizza3.png",
    orders: 85,
  },
  {
    id: "6",
    name: "Classic Burger",
    image: "/foodCategoriesImages/burger.png",
    orders: 72,
  },
];
