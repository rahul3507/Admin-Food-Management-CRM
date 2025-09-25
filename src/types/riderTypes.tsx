/** @format */

export interface Rider {
  id: string;
  riderName: string;
  number: string;
  email: string;
  licensePlateNumber: string;
  registrationNumber: string;
}

export interface RiderTableProps {
  data: Rider[];
}
