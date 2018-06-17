import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {flatMap, map, tap} from 'rxjs/operators';
import {BasicService} from '../../../../services/basic.service';
import {PaymentService} from "../../../../services/payment.service";

@Component({
  selector: 'app-invoice-detail-user',
  templateUrl: './invoice-detail-user.component.html',
  styleUrls: ['./invoice-detail-user.component.css']
})
export class InvoiceDetailUserComponent implements OnInit {
  invoice$: Observable<any>;

  loadingPayPal = false;

  constructor(
    private route: ActivatedRoute,
    private basicService: BasicService,
    private paymentService: PaymentService
  ) {

    this.invoice$ = route.params.pipe(
      map(params => params.invoiceId),
      flatMap(invoiceId => this.basicService.invoice(invoiceId))
    );
  }

  ngOnInit() {}

  onPayClick(invoiceId: number, sum: number) {
    this.loadingPayPal = true;
    this.paymentService.createPayment(sum.toFixed(2))
      .subscribe((payPalRes:any) => window.location.href = payPalRes.redirect_url);

    // "payment successful (temporary fix)
    this.basicService.invoiceStatus(invoiceId, true).subscribe()
  }
}
