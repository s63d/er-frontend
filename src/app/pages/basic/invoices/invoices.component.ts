import {Component, OnInit} from '@angular/core';
import {Observable, of, range} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BasicInvoice} from '../../../models/basic-invoice';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  invoices$: Observable<BasicInvoice[]>;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.invoices$ = this.http.get<BasicInvoice[]>('http://localhost:8084/api/invoices?userId=1');
  }


}
