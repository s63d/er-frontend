import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import { Observable, BehaviorSubject, of, combineLatest } from 'rxjs';
import { BasicService } from '../../../services/basic.service';
import { Vehicle } from '../../../models/vehicle';
import { mergeMap, map, tap } from 'rxjs/operators';
import { BasicVehicle } from '../../../models/basic-vehicle';

@Component({
  selector: 'app-car',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  opened = false
  vehicles$: Observable<BasicVehicle[]>;

  constructor(private auth: AuthService, private basicService: BasicService) { }

  ngOnInit() {
    this.vehicles$ = this.basicService.vehicles();
  }

  addVehicle(v: BasicVehicle) {
    this.vehicles$ = combineLatest(this.vehicles$, of(v))
      .pipe(
        map((data) => {
          const vehicles: BasicVehicle[] = data[0];
          const vehicle: BasicVehicle = data[1];
          return vehicles.map((vehicle1: BasicVehicle) => vehicle1.id === vehicle.id ? vehicle : vehicle1);
        })
      );
  }
}
