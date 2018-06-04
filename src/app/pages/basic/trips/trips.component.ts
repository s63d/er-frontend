import { Component, OnInit } from '@angular/core';
import {concat, from, of} from 'rxjs';
import {filter, flatMap, map, tap} from 'rxjs/operators';
import * as polylineUtil from '@mapbox/polyline';


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  trips$ = of([
    {
      'tripId': 1,
      'length': 0,
      'polyline': {},
      'date': '2018-05-21T12:28:02.000+0000',
      'carTrackerId': '8873028c-3358-42b7-8199-a72901d10e70'
    },
    {
      'tripId': 2,
      'length': 25439,
      'polyline': 'iux{GebixAeAOmB~FKdRrBtRCfRbKbSjLlUhJtUnH|XdNrj@|Hvk@mBbq@gHzm@mEnn@`Adn@ne@bTtPnv@aSln@_[|d@aJtt@zKvt@vNfw@xWfg@tE`w@tF|w@rItx@bIxv@fIrx@hChy@sJvt@_Fbz@iRjn@eIpu@\\pz@jFru@mLfr@Dbs@xUxm@rL|u@_Hnt@aKzz@eJ~u@gPno@',
      'date': '2018-05-21T12:28:26.000+0000',
      'carTrackerId': '8873028c-3358-42b7-8199-a72901d10e70'
    },
    {
      'tripId': 3,
      'length': 4923,
      'polyline': 'uzfeHi~evAeCvHeA`KsEzJyIeDqTgXy^y`Au]c_Aa]i}@sTmhA',
      'date': '2018-05-22T09:17:34.000+0000',
      'carTrackerId': '8873028c-3358-42b7-8199-a72901d10e70'
    }
  ]).pipe(
    map(rawTrips => {
      const trips = [];
      for (const trip of rawTrips) {
        let newTrip = {... trip};
        newTrip.polyline = {'type': 'Feature',
                  'properties': {},
                  'geometry': polylineUtil.toGeoJSON(trip.polyline)
                };
        trips.push(newTrip);
      }
      return trips;
    })
  );

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

  constructor() { }

  ngOnInit() {
  }

}
