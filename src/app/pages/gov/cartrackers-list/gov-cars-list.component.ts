import { Component, OnInit } from '@angular/core';
import {GovernmentService} from '../../../services/government.service';
import {Observable} from 'rxjs';
import {GovernmentVehicle} from '../../../models/government-vehicle';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-cartrackers-list',
  templateUrl: './gov-cars-list.component.html',
  styleUrls: ['./gov-cars-list.component.css']
})
export class GovCarsListComponent implements OnInit {

  page = 1;

  vehicles$: Observable<GovernmentVehicle[]>;

  constructor(private govService: GovernmentService) { }

  ngOnInit() {
    const page = this.govService.vehicles(this.page);

    this.vehicles$ = page.pipe(
      map(p => p.content)
    );
  }

}
