export interface BasicVehicle {
  id: string;
  type: string;
  brand: string;
  color: string;
  weight: number;
  rate: string;
  registrationDate: Date;
  endDate?: Date;
  status: string;
}
