export interface User {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  postal: string;
  city: string;
  email: string;
}

export interface Detail {
  id: number;
  rate: number;
  description: string;
}

export interface Part {
  id: number;
  tripId: number;
  price: number;
  distance: number;
  vat: number;
  origin: string;
  details: Detail[];
}

export interface Line {
  id: number;
  tripId: number;
  distance: number;
  price: number;
  parts: Part[];
}

export interface Invoice {
  user: User;
  vehicleId: string;
  date: Date;
  status: string;
  lines: Line[];
  price: number;
  distance: number;
  id: number;
}
