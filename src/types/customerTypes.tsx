/** @format */

export interface Customer {
  id: string;
  customerName: string;
  location: string;
  email: string;
  number: string;
}

export interface CustomerTableProps {
  data: Customer[];
}
