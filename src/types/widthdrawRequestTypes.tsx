/** @format */

export type WithdrawStatus = "Successful" | "Pending" | "Failed" | "Processing";

export interface WithdrawRequest {
  id: string;
  withdrawId: string;
  date: string;
  withdrawMethod: string;
  amount: number;
  status: WithdrawStatus;
  transactionId?: string;
  approvalCode?: string;
}

export interface PaymentReceiptModalProps {
  open: boolean;
  onClose: () => void;
  withdrawData: WithdrawRequest | null;
}
