/** @format */

export type OrderStatus =
  | "Pending"
  | "Accepted"
  | "Preparing"
  | "Shipping"
  | "Delivered"
  | "Cancelled";

export interface FoodItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Driver {
  id: string;
  name: string;
  phone: string;
  eta: string; // Estimated time of arrival
  profileImage?: string;
}

export interface Order {
  id: string;
  date: string;
  status: OrderStatus;
  customerName: string;
  profileImage: string;
  contactNo: string;
  location: string;
  foodArray: FoodItem[];
  totalPrice: number;
  assignedDriver?: Driver;
}

export interface OrderManagementProps {
  orders: Order[];
  onStatusChange?: (orderId: string, newStatus: OrderStatus) => void;
  onSearch?: (searchTerm: string) => void;
}

export interface OrderCardProps {
  order: Order;
  onStatusChange?: (orderId: string, newStatus: OrderStatus) => void;
  onAssignDriver?: (
    orderId: string,
    driverData: {
      name: string;
      phone: string;
      eta: string;
    }
  ) => void;
}
