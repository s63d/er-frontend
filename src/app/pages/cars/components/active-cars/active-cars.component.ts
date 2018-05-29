import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Ownership} from '../../../../models/ownership';
import {OwnershipService} from '../../../../services/ownership.service';

@Component({
  selector: 'app-active-cars',
  templateUrl: './active-cars.component.html',
  styleUrls: ['./active-cars.component.css']
})
export class ActiveCarsComponent implements OnInit {

  ownerships$: Observable<Ownership[]>;
  constructor(private ownershipService: OwnershipService) { }

  ngOnInit() {
    this.ownerships$ = this.ownershipService.loadActive();
  }

}
