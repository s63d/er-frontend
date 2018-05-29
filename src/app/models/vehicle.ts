import {CarTracker} from './cartracker';

export interface Vehicle {
  type: string;
  brand: string;
  color: string;
  weight: number;
  rate: string;
  id: string;
  carTracker: CarTracker;
}
