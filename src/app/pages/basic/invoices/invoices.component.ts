import {Component, OnInit} from '@angular/core';
import {Observable, of, range} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BasicInvoice} from '../../../models/basic-invoice';
import {AuthService} from '../../../services/auth.service';
import {filter, flatMap} from 'rxjs/operators';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  invoices$: Observable<BasicInvoice[]>;
  constructor(private http: HttpClient, private auth: AuthService) {
  }

  ngOnInit() {

    this.invoices$ =
      this.auth.user$.pipe(
        filter(user => user.email === 'goosje@hotmail.com'),
        flatMap(x =>  this.http.get<BasicInvoice[]>('http://localhost:8084/api/invoices?userId=1'))
      );
  }


}
