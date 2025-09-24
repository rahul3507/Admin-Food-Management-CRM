/** @format */

export interface DashboardMetric {
  title: string;
  value: string | number;
  change: number;
  changeType: "increase" | "decrease";
}

// Define the RecentTransection interface
export interface RecentTransection {
  orderId: string;
  name: string;
  amount: string;
}

export interface RecentOrder {
  id: string;
  customer: string;
  items: string;
  amount: string;
  status: string;
  statusColor: string;
}
