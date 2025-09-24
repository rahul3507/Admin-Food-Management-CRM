/** @format */

import type {
  DashboardMetric,
  RecentOrder,
  RecentTransection,
} from "@/types/dashboardTypes";

export const dashboardMetrics: DashboardMetric[] = [
  {
    title: "Revenue",
    value: "12,145",
    change: 2.4,
    changeType: "decrease",
  },
  {
    title: "Balance",
    value: "6,023.25",
    change: 6.5,
    changeType: "increase",
  },
  {
    title: "Total Orders",
    value: 24,
    change: 6.5,
    changeType: "increase",
  },
  {
    title: "Menu Items",
    value: 214,
    change: 4.2,
    changeType: "increase",
  },
];

export const RecentTransections: RecentTransection[] = [
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
  { orderId: "#123402", name: "John Doe", amount: "$32.26" },
];

export const RecentOrders: RecentOrder[] = [
  {
    id: "#1234",
    customer: "John Doe",
    items: "Burger, Fries",
    amount: "$12",
    status: "Pending",
    statusColor: "bg-orange-100 text-orange-800",
  },
  {
    id: "#1234",
    customer: "John Doe",
    items: "Burger, Fries",
    amount: "$12",
    status: "Ready",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: "#1234",
    customer: "John Doe",
    items: "Burger, Fries",
    amount: "$12",
    status: "Delivered",
    statusColor: "bg-blue-100 text-blue-800",
  },
  {
    id: "#1234",
    customer: "John Doe",
    items: "Burger, Fries",
    amount: "$12",
    status: "Ready",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: "#1234",
    customer: "John Doe",
    items: "Burger, Fries",
    amount: "$12",
    status: "Delivered",
    statusColor: "bg-blue-100 text-blue-800",
  },
  {
    id: "#1234",
    customer: "John Doe",
    items: "Burger, Fries",
    amount: "$12",
    status: "Pending",
    statusColor: "bg-orange-100 text-orange-800",
  },
  {
    id: "#1234",
    customer: "John Doe",
    items: "Burger, Fries",
    amount: "$12",
    status: "Ready",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: "#1234",
    customer: "John Doe",
    items: "Burger, Fries",
    amount: "$12",
    status: "Delivered",
    statusColor: "bg-blue-100 text-blue-800",
  },
  {
    id: "#1234",
    customer: "John Doe",
    items: "Burger, Fries",
    amount: "$12",
    status: "Ready",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: "#1234",
    customer: "John Doe",
    items: "Burger, Fries",
    amount: "$12",
    status: "Delivered",
    statusColor: "bg-blue-100 text-blue-800",
  },
];
