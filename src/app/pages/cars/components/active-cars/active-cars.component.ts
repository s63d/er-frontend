import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Ownership} from '../../../../models/ownership';

@Component({
  selector: 'app-active-cars',
  templateUrl: './active-cars.component.html',
  styleUrls: ['./active-cars.component.css']
})
export class ActiveCarsComponent implements OnInit {

  ownerships$: Observable<Ownership[]>;
  constructor() { }

  ngOnInit() {
  }

}
