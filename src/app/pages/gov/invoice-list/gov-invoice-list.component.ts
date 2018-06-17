import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {GovernmentService} from '../../../services/government.service';
import {Page} from '../../../models/page';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './gov-invoice-list.component.html',
  styleUrls: ['./gov-invoice-list.component.css']
})
export class GovInvoiceListComponent implements OnInit {

  invoices$: Observable<any>;
  page$: Observable<Page<any>>;
  constructor(private govService: GovernmentService) { }

  ngOnInit() {
    this.page$ = this.govService.invoices();
    this.invoices$ = this.page$.pipe(
      map(page => page.content)
    );
  }

}
