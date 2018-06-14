import {Component, OnInit} from '@angular/core';
import {Observable, of, range} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BasicInvoice} from '../../../models/basic-invoice';
import {AuthService} from '../../../services/auth.service';
import {filter, flatMap} from 'rxjs/operators';
import { API_BASE_URL } from '../../../constants';
import {BasicService} from '../../../services/basic.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  invoices$: Observable<any[]>;
  constructor(private basicService: BasicService, private auth: AuthService) {
  }

  ngOnInit() {
    this.invoices$ = this.basicService.invoices();
  }


}
