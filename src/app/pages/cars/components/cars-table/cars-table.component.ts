import { Component, OnInit } from '@angular/core';
import {Observable, zip} from 'rxjs';
import {Ownership} from '../../../../models/ownership';
import {OwnershipService} from '../../../../services/ownership.service';
import {Vehicle} from '../../../../models/vehicle';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.css']
})
export class CarsTableComponent implements OnInit {

  ownerships$: Observable<Ownership[]>;
  constructor(private ownershipService: OwnershipService) { }

  ngOnInit() {
    this.ownerships$ = zip(this.ownershipService.loadActive(), this.ownershipService.loadPrevious()).pipe(
      map(data => [...data[0], ...data[1]]),
    );
  }


  onSuspend(vehicle: Vehicle) {
    this.ownershipService.suspendVehicle(vehicle).subscribe(console.log);
  }
}
