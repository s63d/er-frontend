export interface User {
  firstName: string;
  lastName: string;
  address: string;
  postal: string;
  city: string;
  id: number;
}

export interface Trip {
  tripId: number;
  length: number;
  polyline: string;
}

export interface BasicInvoice {
  user: User;
  date: Date;
  status: string;
  price: string;
  trips: Trip[];
  length: number;
  id: number;
}
