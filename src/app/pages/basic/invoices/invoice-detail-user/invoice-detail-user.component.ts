import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {flatMap, map} from 'rxjs/operators';
import {BasicService} from '../../../../services/basic.service';

@Component({
  selector: 'app-invoice-detail-user',
  templateUrl: './invoice-detail-user.component.html',
  styleUrls: ['./invoice-detail-user.component.css']
})
export class InvoiceDetailUserComponent implements OnInit {
  invoice;

  constructor(private route: ActivatedRoute, private basicService: BasicService) {

    route.params.pipe(
      map(params => params.invoiceId),
      flatMap(invoiceId => this.basicService.invoice(invoiceId))
    ).subscribe(invoice => {
      this.invoice = invoice;
    });
  }

  ngOnInit() {}

}
