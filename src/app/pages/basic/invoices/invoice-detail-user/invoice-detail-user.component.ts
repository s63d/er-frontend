import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {flatMap, map} from 'rxjs/operators';
import {BasicService} from '../../../../services/basic.service';
import {Invoice} from '../../../../models/invoice';

@Component({
  selector: 'app-invoice-detail-user',
  templateUrl: './invoice-detail-user.component.html',
  styleUrls: ['./invoice-detail-user.component.css']
})
export class InvoiceDetailUserComponent implements OnInit {
  invoice$: Observable<Invoice>;

  constructor(private route: ActivatedRoute, private basicService: BasicService) {

    this.invoice$ = route.params.pipe(
      map(params => params.invoiceId),
      flatMap(invoiceId => this.basicService.invoice(invoiceId))
    );
  }

  ngOnInit() {}

}
