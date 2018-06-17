import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Rate} from '../../../../models/rate';
import {GovernmentService} from '../../../../services/government.service';
import {AdminUser, Role} from '../../../../models/adminUser';
import {map} from "rxjs/operators";
import {combineLatest} from "rxjs/index";

@Component({
  selector: 'app-gov-rate-list',
  templateUrl: './gov-rate-list.component.html',
  styleUrls: ['./gov-rate-list.component.css']
})
export class GovRateListComponent implements OnInit {

  rates$: Observable<Rate[]>;

  showModal: boolean;
  rateCategory: Rate;
  ratePrice: number;
  constructor(private govService: GovernmentService) { }

  ngOnInit() {
    this.rates$ = this.govService.rates();
  }

  openRoleModal(rate: Rate) {
    this.rateCategory = rate;
    this.ratePrice = rate.price;
    this.showModal = true;
  }

  changeRate() {
    const updatedRole$ = this.govService.updateRate(this.rateCategory.category, this.ratePrice);

    this.rates$ = combineLatest(this.rates$, updatedRole$)
      .pipe(
        map(data => {
          const rates: Rate[] = data[0];
          const updatedRate: Rate = data[1];
          return rates.map((rate: Rate) => rate.category === updatedRate.category ? updatedRate : rate)
        })
      );

    this.showModal = false
  }

}
