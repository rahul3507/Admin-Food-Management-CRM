/** @format */
"use client";
import React, { useState } from "react";
import { Info, View } from "lucide-react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import OrderDetailsModal from "@/components/orders/orderDetailsModal";
import PaymentDetailsModal from "@/components/payment/paymentDetailsModal";
import { PaymentReceiptModal } from "@/components/widthdrawRequest/paymentRecieptModal";
import { TableColumn, TableProps } from "@/types/commonTypes";
import { Order } from "@/types/orderManagTypes";
import { Payment } from "@/types/paymentTypes";
import { WithdrawRequest } from "@/types/widthdrawRequestTypes";
import { RiderOrder } from "@/types/riderManagTypes";
import { DeliveryDetailsModal } from "../riderManag/deliveryDetailsModal";

const CustomTable: React.FC<TableProps> = ({
  columns,
  data,
  actions = [],
  itemsPerPage = 10,
  showPagination = true,
  headerColor = "bg-red-500",
  statusColors = {
    Accepted: "bg-blue-100 text-blue-800",
    Pending: "bg-yellow-100 text-yellow-800",
    Shipping: "bg-purple-100 text-purple-800",
    Delivered: "bg-green-100 text-green-800",
    Cancelled: "bg-red-100 text-red-800",
    Preparing: "bg-orange-100 text-orange-800",
    Successful: "bg-green-100 text-green-800",
    Failed: "bg-red-100 text-red-800",
    Processing: "bg-blue-100 text-blue-800",
    Pickup: "bg-yellow-100 text-yellow-800",
    "On Ride": "bg-blue-100 text-blue-800",
  },
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const formatValue = (value: unknown, column: TableColumn) => {
    if (column.type === "amount" && typeof value === "number") {
      return `$${value.toFixed(2)}`;
    }
    if (column.type === "amount" && typeof value === "string") {
      return value;
    }
    return value;
  };

  const renderCell = (row: Record<string, unknown>, column: TableColumn) => {
    const value = row[column.key];

    switch (column.type) {
      case "image":
        // Determine which image and name to use based on column key
        let imageKey = "profileImage";
        let nameValue = value as string;

        if (column.key === "customerName") {
          imageKey = "customerImage";
          nameValue = row.customerName as string;
        } else if (column.key === "riderName") {
          imageKey = "riderImage";
          nameValue = row.riderName as string;
        }

        return (
          <div className="flex items-center gap-2">
            <Image
              src={(row[imageKey] as string) || "/api/placeholder/40/40"}
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full object-cover bg-gray-200"
            />
            <span className="font-medium text-gray-900">
              {nameValue || (value as string)}
            </span>
          </div>
        );

      case "status":
        return (
          <span
            className={`px-3 py-1   rounded-sm text-xs font-medium ${
              statusColors[value as string] || "bg-gray-100 text-gray-800"
            }`}
          >
            {value as string}
          </span>
        );

      case "amount":
        return (
          <span className="font-semibold text-gray-900">
            {formatValue(value, column) as string}
          </span>
        );

      case "action":
        const isPaymentData = "orderId" in row && !("foodArray" in row);
        const isWithdrawData = "withdrawId" in row;
        const isRiderData = "riderName" in row;

        return (
          <div className="flex items-center gap-2">
            {isWithdrawData ? (
              <PaymentReceiptModal
                withdrawData={row as unknown as WithdrawRequest}
              >
                <button
                  className="p-1.5 cursor-pointer rounded-full hover:bg-gray-100 transition-colors"
                  title="View Receipt"
                >
                  <View className="w-4 h-4 text-gray-600" />
                </button>
              </PaymentReceiptModal>
            ) : isRiderData ? (
              <DeliveryDetailsModal orderData={row as unknown as RiderOrder}>
                <button
                  className="p-1.5 cursor-pointer rounded-full hover:bg-gray-100 transition-colors"
                  title="View Delivery Details"
                >
                  <View className="w-4 h-4 text-gray-600" />
                </button>
              </DeliveryDetailsModal>
            ) : (
              actions.map((action, index) => {
                if (action.type === "view") {
                  if (isPaymentData) {
                    return (
                      <PaymentDetailsModal
                        key={index}
                        payment={row as unknown as Payment}
                      >
                        <button
                          className="p-1.5 cursor-pointer rounded-full hover:bg-gray-100 transition-colors"
                          title="View Payment Details"
                        >
                          <Info className="w-4 h-4 text-gray-600" />
                        </button>
                      </PaymentDetailsModal>
                    );
                  } else {
                    return (
                      <OrderDetailsModal
                        key={index}
                        order={row as unknown as Order}
                      >
                        <button
                          className="p-1.5 cursor-pointer rounded-full hover:bg-gray-100 transition-colors"
                          title="View Order Details"
                        >
                          <Info className="w-4 h-4 text-gray-600" />
                        </button>
                      </OrderDetailsModal>
                    );
                  }
                }
              })
            )}
          </div>
        );
      default:
        return (
          <span className="text-gray-900">
            {formatValue(value, column) as string}
          </span>
        );
    }
  };

  const renderPagination = () => {
    if (!showPagination || totalPages <= 1) return null;

    const getVisiblePages = () => {
      const pages = [];
      const maxVisible = 3;

      if (totalPages <= maxVisible + 2) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        if (currentPage <= maxVisible) {
          for (let i = 1; i <= maxVisible + 1; i++) {
            pages.push(i);
          }
        } else if (currentPage >= totalPages - maxVisible + 1) {
          for (let i = totalPages - maxVisible; i <= totalPages; i++) {
            pages.push(i);
          }
        } else {
          pages.push(currentPage - 1, currentPage, currentPage + 1);
        }
      }
      return pages;
    };

    const visiblePages = getVisiblePages();
    const showStartEllipsis = visiblePages[0] > 2;
    const showEndEllipsis =
      visiblePages[visiblePages.length - 1] < totalPages - 1;

    return (
      <div className="mt-4 py-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className={
                  currentPage === 1
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>

            {visiblePages[0] > 1 && (
              <PaginationItem>
                <PaginationLink
                  onClick={() => setCurrentPage(1)}
                  className="cursor-pointer"
                >
                  1
                </PaginationLink>
              </PaginationItem>
            )}

            {showStartEllipsis && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {visiblePages.map((pageNum) => (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  onClick={() => setCurrentPage(pageNum)}
                  isActive={currentPage === pageNum}
                  className={`cursor-pointer ${
                    currentPage === pageNum
                      ? "bg-red-100 text-red-600 border border-red-500"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            ))}

            {showEndEllipsis && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {visiblePages[visiblePages.length - 1] < totalPages && (
              <PaginationItem>
                <PaginationLink
                  onClick={() => setCurrentPage(totalPages)}
                  className="cursor-pointer"
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
        <Table className="w-full mx-0 ">
          <TableHeader className={`${headerColor} text-white`}>
            <TableRow>
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  className="text-white font-medium py-4 text-lg md:text-xl"
                  style={column.width ? { width: column.width } : {}}
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((row, index) => (
              <TableRow
                key={index}
                className="hover:bg-gray-50 transition-colors"
              >
                {columns.map((column) => (
                  <TableCell
                    key={column.key}
                    className="py-3 text-sm md:text-base"
                  >
                    {renderCell(row, column)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {renderPagination()}
      </div>
    </div>
  );
};

export default CustomTable;
