export interface GovernmentVehicle {
  id: string;
  type: string;
  brand: string;
  color: string;
  weight: number;
  registrationDate: Date;
  endDate?: Date;
  carTrackerId?: String;
  stolen: boolean;
}
