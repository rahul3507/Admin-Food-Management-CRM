/** @format */

export interface WithdrawRequest {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  restaurantName: string;
  requestedAmount: number;
  availableBalance: number;
  paymentMethod: "PayPal" | "Mastercard" | "Visa";
  cardHolderName: string;
  accountEmail: string;
  cardNumber: string;
  date: string;
  status: "Pending" | "Approved" | "Rejected";
}

export interface WithdrawRequestTableProps {
  data: WithdrawRequest[];
}
