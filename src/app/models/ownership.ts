import {Vehicle} from './vehicle';

export interface Ownership {
  startDate: Date;
  endDate?: Date;
  vehicle: Vehicle;
  id: number;
}
