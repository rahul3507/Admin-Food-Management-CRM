/** @format */

import {
  AnalyticsCard,
  MenuItemData,
  CustomerInsightsData,
} from "@/types/analyticsTypes";
import { MdAddCard } from "react-icons/md";
import { IoCardSharp } from "react-icons/io5";
import { HiMiniCurrencyDollar } from "react-icons/hi2";

export const analyticsData: AnalyticsCard[] = [
  {
    title: "Balance",
    value: "2350.52",
    icon: IoCardSharp,
    change: 4.2,
    changeType: "increase",
  },
  {
    title: "Total Revenue",
    value: "342,247",
    icon: HiMiniCurrencyDollar,
    change: 6.5,
    changeType: "increase",
  },
  {
    title: "Per Day Income",
    value: "12,145",
    icon: MdAddCard,
    change: 2.4,
    changeType: "decrease",
  },
];

export const menuItemsData: MenuItemData[] = [
  {
    name: "Classic Burger",
    category: "Burgers",
    orders: 156,
    revenue: "2,028",
    growthPercentage: 12,
  },
  {
    name: "Margherita Pizza",
    category: "Pizza",
    orders: 156,
    revenue: "2,028",
    growthPercentage: 8,
  },
  {
    name: "Classic Burger",
    category: "Burgers",
    orders: 156,
    revenue: "2,028",
    growthPercentage: 12,
  },
  {
    name: "Margherita Pizza",
    category: "Pizza",
    orders: 156,
    revenue: "2,028",
    growthPercentage: 8,
  },
  {
    name: "Classic Burger",
    category: "Burgers",
    orders: 156,
    revenue: "2,028",
    growthPercentage: 12,
  },
  {
    name: "Margherita Pizza",
    category: "Pizza",
    orders: 156,
    revenue: "2,028",
    growthPercentage: 8,
  },
  {
    name: "Caesar Salad",
    category: "Salads",
    orders: 156,
    revenue: "2,028",
    growthPercentage: 6,
  },
  {
    name: "Classic Burger",
    category: "Pizza",
    orders: 156,
    revenue: "2,028",
    growthPercentage: 8,
  },
  {
    name: "Classic Burger",
    category: "Pizza",
    orders: 156,
    revenue: "2,028",
    growthPercentage: 8,
  },
  {
    name: "Classic Burger",
    category: "Pizza",
    orders: 156,
    revenue: "2,028",
    growthPercentage: 8,
  },
];

export const customerInsightsData: CustomerInsightsData = {
  customerTypes: [
    {
      name: "New Customers",
      value: 40,
      percentage: 40,
      color: "#FFC107", // red
    },
    {
      name: "Returning Customers",
      value: 60,
      percentage: 60,
      color: "#FF5722", // yellow
    },
  ],
  orderTimes: [
    {
      name: "Breakfast",
      orders: 56,
      percentage: 15,
    },
    {
      name: "Lunch",
      orders: 156,
      percentage: 60,
    },
    {
      name: "Dinner",
      orders: 89,
      percentage: 35,
    },
    {
      name: "Others",
      orders: 56,
      percentage: 20,
    },
  ],
};
