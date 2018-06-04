import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Ownership} from '../../../../../models/ownership';
import {Vehicle} from '../../../../../models/vehicle';
import {BasicService} from '../../../../../services/basic.service';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.css']
})
export class CarsTableComponent implements OnInit {

  vehicles$: Observable<any[]>;
  constructor(private basicService: BasicService) { }

  ngOnInit() {
    this.vehicles$ = this.basicService.vehicles();
  }

  onSuspend(vehicle: Vehicle) {
    // this.ownershipService.suspendVehicle(vehicle).subscribe(console.log);
  }
}
