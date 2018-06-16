import { Component, OnInit } from '@angular/core';
import {combineLatest, Observable, of} from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';
import * as polylineUtil from '@mapbox/polyline';
import {BasicService} from '../../../services/basic.service';
import {BasicVehicle} from '../../../models/basic-vehicle';
import * as _ from 'lodash';


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  trips = {};
  polylines: Observable<any>;
  statuses$: Observable<String[]>;
  vehicles$: Observable<BasicVehicle[]>;

  constructor(private basicService: BasicService) { }

  ngOnInit() {

    this.vehicles$ = this.basicService.vehicles();
    this.statuses$ = this.vehicles$.pipe(
      map(vehicles => _.groupBy(vehicles, 'status')),
      map(groups => Object.keys(groups)),
    );
  }


  filteredVehicles(status: String): Observable<BasicVehicle[]> {
    return this.vehicles$.pipe(
      map(vehicles => vehicles.filter(v => v.status === status))
    );
  }

  tripsChanged(vehicleId, selectedTrips) {
    this.trips[vehicleId] = selectedTrips;

    this.polylines = combineLatest(of(this.trips), this.vehicles$).pipe(
      map(obj => {
        const vehicles = obj[1];
        const trips = obj[0];

        const arr = [];
        const ids = Object.keys(trips);
        for (const id of ids) {
          for (const trip of trips[id]) {
            if (trip.polyline === '') {
              continue;
            }

            const decoded = {
              'type': 'Feature',
              'properties': {},
              'geometry': polylineUtil.toGeoJSON(trip.polyline)
            };
            arr.push({
              color: vehicles.filter(v => v.id === id)[0].color,
              geo: decoded
            });
          }
        }
        return arr;
      }));
  }

}
