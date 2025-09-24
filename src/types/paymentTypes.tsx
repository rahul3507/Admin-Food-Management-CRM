/** @format */

export interface Payment {
  id: string;
  orderId: string;
  date: string;
  customerName: string;
  profileImage: string;
  contactNo: string;
  location: string;
  amount: number;
  adminCommission: number;
  paymentMethod: string;
  status: PaymentStatus;
  transactionId?: string;
}

export type PaymentStatus = "Completed" | "Pending" | "Failed" | "Refunded";

export interface PaymentDetailsModalProps {
  children: React.ReactNode;
  payment: Payment;
}
