/** @format */

"use client";

import React, { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { Info, Trash2 } from "lucide-react";
import { DeleteModal } from "./deleteModal";

interface Column {
  key: string;
  header: string;
  className?: string;
}

interface PaymentTableProps<T> {
  data: T[];
  columns: Column[];
  itemsPerPage?: number;
  onView?: (item: T) => void;
  onDelete?: (item: T) => void;
  renderCell?: (item: T, columnKey: string) => React.ReactNode;
}

export function PaymentTable<T extends { id: string }>({
  data,
  columns,
  itemsPerPage = 10,
  onView,
  onDelete,
  renderCell,
}: PaymentTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<T | null>(null);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const getPaginationItems = () => {
    const items = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          items.push(i);
        }
        items.push("ellipsis");
        items.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        items.push(1);
        items.push("ellipsis");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          items.push(i);
        }
      } else {
        items.push(1);
        items.push("ellipsis");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          items.push(i);
        }
        items.push("ellipsis");
        items.push(totalPages);
      }
    }

    return items;
  };

  const handleDeleteClick = (item: T) => {
    setItemToDelete(item);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (itemToDelete && onDelete) {
      onDelete(itemToDelete);
    }
    setIsDeleteModalOpen(false);
    setItemToDelete(null);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-yellow-400 text-lg hover:bg-yellow-400 rounded-t-md">
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  className={`text-black font-semibold py-3 ${
                    column.className || ""
                  }`}
                >
                  {column.header}
                </TableHead>
              ))}
              <TableHead className="text-black font-semibold text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <TableCell
                    key={column.key}
                    className={column.className || "py-3"}
                  >
                    {renderCell
                      ? renderCell(item, column.key)
                      : ((item as Record<string, unknown>)[
                          column.key
                        ] as React.ReactNode)}
                  </TableCell>
                ))}
                <TableCell className="text-center py-3">
                  <div className="flex justify-center gap-2">
                    {onView && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onView(item)}
                        className="h-8 w-8 p-0 hover:bg-blue-50"
                      >
                        <Info className="h-4 w-4" />
                      </Button>
                    )}
                    {onDelete && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteClick(item)}
                        className="h-8 w-8 p-0 text-red-600 hover:text-red-800 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {getPaginationItems().map((item, index) => (
                <PaginationItem key={index}>
                  {item === "ellipsis" ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      onClick={() => setCurrentPage(item as number)}
                      isActive={currentPage === item}
                      className="cursor-pointer"
                    >
                      {item}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
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
      )}

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Delete Payment"
        description="Do you want to delete this payment? This action can't be undone"
      />
    </div>
  );
}
