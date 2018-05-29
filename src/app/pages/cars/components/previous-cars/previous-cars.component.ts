import { Component, OnInit } from '@angular/core';
import {Ownership} from '../../../../models/ownership';
import {Observable} from 'rxjs';
import {OwnershipService} from '../../../../services/ownership.service';

@Component({
  selector: 'app-previous-cars',
  templateUrl: './previous-cars.component.html',
  styleUrls: ['./previous-cars.component.css']
})
export class PreviousCarsComponent implements OnInit {

  ownerships$: Observable<Ownership[]>;

  constructor(private ownershipService: OwnershipService) { }

  ngOnInit() {
    this.ownerships$ = this.ownershipService.loadPrevious();
  }

}
