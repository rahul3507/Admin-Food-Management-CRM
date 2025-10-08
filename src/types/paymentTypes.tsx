/** @format */

export interface Payment {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  userStatus: "Rider" | "Restaurant";
  date: string;
  amount: number;
  paymentMethod: "Mastercard" | "PayPal" | "Visa";
  status: "Successful" | "Cancel" | "Pending";
  avatar?: string;
}

export interface PaymentTableProps {
  data: Payment[];
}
