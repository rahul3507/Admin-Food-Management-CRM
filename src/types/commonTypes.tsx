/** @format */

export interface HeaderProps {
  title: string;
  description: string;
  showSearch?: boolean;
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
}

// Custom Table Types
export interface TableColumn {
  key: string;
  label: string;
  type?: "text" | "image" | "status" | "action" | "amount";
  width?: string;
}

export interface TableAction<T = Record<string, unknown>> {
  type: "view" | "delete" | "receipt";
  onClick: (row: T) => void;
}

export interface TableProps<T = Record<string, unknown>> {
  columns: TableColumn[];
  data: T[];
  actions?: TableAction<T>[];
  itemsPerPage?: number;
  showPagination?: boolean;
  headerColor?: string;
  statusColors?: Record<string, string>;
}
