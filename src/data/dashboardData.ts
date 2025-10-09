/** @format */

import { AnalyticsCard } from "@/types/dashboardTypes";
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
