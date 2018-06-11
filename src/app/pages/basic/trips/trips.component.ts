import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
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

  // trips$ = of([
  //   {
  //     'tripId': 1,
  //     'length': 3587,
  //     'polyline': 'kt~cHo~jrA_A_X{@_XgC}UzDyYzKyb@~U{N~ZbAhZgLhK}g@',
  //     'date': '2018-05-21T12:28:02.000+0000',
  //     'carTrackerId': '8873028c-3358-42b7-8199-a72901d10e70'
  //   },
  //   {
  //     'tripId': 2,
  //     'length': 25439,
  //     'polyline': 'iux{GebixAeAOmB~FKdRrBtRCfRbKbSjLlUhJtUnH|XdNrj@|Hvk@mBbq@gHzm@mEnn@`Adn@ne@bTtPnv@aSln@_[|d@aJtt@zKvt@vNfw@xWfg@tE`w@tF|w@rItx@bIxv@fIrx@hChy@sJvt@_Fbz@iRjn@eIpu@\\pz@jFru@mLfr@Dbs@xUxm@rL|u@_Hnt@aKzz@eJ~u@gPno@',
  //     'date': '2018-05-21T12:28:26.000+0000',
  //     'carTrackerId': '8873028c-3358-42b7-8199-a72901d10e70'
  //   },
  //   {
  //     'tripId': 3,
  //     'length': 4923,
  //     'polyline': 'uzfeHi~evAeCvHeA`KsEzJyIeDqTgXy^y`Au]c_Aa]i}@sTmhA',
  //     'date': '2018-05-22T09:17:34.000+0000',
  //     'carTrackerId': '8873028c-3358-42b7-8199-a72901d10e70'
  //   }
  // ]).pipe(
  //   map(rawTrips => {
  //     const trips = [];
  //     for (const trip of rawTrips) {
  //       let newTrip = {... trip};
  //       newTrip.polyline = {'type': 'Feature',
  //                 'properties': {},
  //                 'geometry': polylineUtil.toGeoJSON(trip.polyline)
  //               };
  //       trips.push(newTrip);
  //     }
  //     return trips;
  //   })
  //);

  selectedTrips = [];


  // // TODO make this fancy......
  // polylines$ = this.trips$.pipe(
  //   map(trips => {
  //     const polylines = [];
  //     for (const trip of trips) {
  //       if (trip.polyline === '') {
  //         continue;
  //       }
  //       polylines.push({'type': 'Feature',
  //         'properties': {},
  //         'geometry': polylineUtil.toGeoJSON(trip.polyline)
  //       });
  //     }
  //     return polylines;
  //   }));

  statuses$: Observable<String[]>;
  vehicles$: Observable<BasicVehicle[]>;

  constructor(private basicService: BasicService) { }

  ngOnInit() {

    this.vehicles$ = this.basicService.vehicles();
    this.statuses$ = this.vehicles$.pipe(
      map(vehicles => _.groupBy(vehicles, 'status')),
      map(groups => Object.keys(groups)),
      tap(console.log)
    );
  }


  filteredVehicles(status: String): Observable<BasicVehicle[]> {
    return this.vehicles$.pipe(
      tap(console.log),
      map(vehicles => vehicles.filter(v => v.status === status))
    );
  }

}
