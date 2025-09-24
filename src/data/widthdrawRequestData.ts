/** @format */

import { WithdrawRequest } from "@/types/widthdrawRequestTypes";

export const withdrawRequestData: WithdrawRequest[] = [
  {
    id: "WD001",
    withdrawId: "235026",
    date: "2024-09-25",
    withdrawMethod: "PayPal",
    amount: 2560.32,
    status: "Successful",
    transactionId: "TXN987654321",
    approvalCode: "#123456",
  },
  {
    id: "WD002",
    withdrawId: "235027",
    date: "2024-09-25",
    withdrawMethod: "PayPal",
    amount: 2560.32,
    status: "Pending",
    transactionId: "TXN987654322",
  },
  {
    id: "WD003",
    withdrawId: "235028",
    date: "2024-09-25",
    withdrawMethod: "PayPal",
    amount: 2560.32,
    status: "Successful",
    transactionId: "TXN987654323",
    approvalCode: "#123457",
  },
  {
    id: "WD004",
    withdrawId: "235029",
    date: "2024-09-25",
    withdrawMethod: "PayPal",
    amount: 2560.32,
    status: "Pending",
    transactionId: "TXN987654324",
  },
  {
    id: "WD005",
    withdrawId: "235030",
    date: "2024-09-25",
    withdrawMethod: "PayPal",
    amount: 2560.32,
    status: "Successful",
    transactionId: "TXN987654325",
    approvalCode: "#123458",
  },
  {
    id: "WD006",
    withdrawId: "235031",
    date: "2024-09-25",
    withdrawMethod: "PayPal",
    amount: 2560.32,
    status: "Pending",
    transactionId: "TXN987654326",
  },
  {
    id: "WD007",
    withdrawId: "235032",
    date: "2024-09-25",
    withdrawMethod: "PayPal",
    amount: 2560.32,
    status: "Successful",
    transactionId: "TXN987654327",
    approvalCode: "#123459",
  },
  {
    id: "WD008",
    withdrawId: "235033",
    date: "2024-09-25",
    withdrawMethod: "PayPal",
    amount: 2560.32,
    status: "Successful",
    transactionId: "TXN987654328",
    approvalCode: "#123460",
  },
  {
    id: "WD009",
    withdrawId: "235034",
    date: "2024-09-25",
    withdrawMethod: "PayPal",
    amount: 2560.32,
    status: "Successful",
    transactionId: "TXN987654329",
    approvalCode: "#123461",
  },
  {
    id: "WD010",
    withdrawId: "235035",
    date: "2024-09-25",
    withdrawMethod: "PayPal",
    amount: 2560.32,
    status: "Successful",
    transactionId: "TXN987654330",
    approvalCode: "#123462",
  },
];

export const getWithdrawByStatus = (status: string): WithdrawRequest[] => {
  return withdrawRequestData.filter((withdraw) => withdraw.status === status);
};

export const getAllWithdraws = (): WithdrawRequest[] => {
  return withdrawRequestData;
};

export const getWithdrawById = (id: string): WithdrawRequest | undefined => {
  return withdrawRequestData.find((withdraw) => withdraw.id === id);
};
