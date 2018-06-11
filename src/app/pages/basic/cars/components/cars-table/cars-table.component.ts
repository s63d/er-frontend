import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs';
import {BasicService} from '../../../../../services/basic.service';
import { BasicVehicle } from '../../../../../models/basic-vehicle';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.css']
})
export class CarsTableComponent implements OnInit {

  @Input() vehicles: BasicVehicle[];
  constructor(private basicService: BasicService) { }

  ngOnInit() {}

  onSuspend({ id }) {
    this.basicService.suspendVehicle(id).subscribe(console.log); // TODO: merge with vehicles$?
  }
}
