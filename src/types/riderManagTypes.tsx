/** @format */

export type RiderOrderStatus = "Pickup" | "Delivered" | "On Ride";

export interface RiderOrder {
  id: string;
  orderId: string;
  customerName: string;
  customerImage?: string;
  location: string;
  riderName: string;
  riderImage?: string;
  status: RiderOrderStatus;
  contactNumber?: string;
  date?: string;
  estimateDeliveryTime?: string;
  foodList?: {
    item: string;
    quantity: number;
    price: number;
  }[];
  total?: number;
  riderId?: string;
  riderContactNumber?: string;
}

export interface DeliveryDetailsModalProps {
  children: React.ReactNode;
  orderData: RiderOrder;
}
