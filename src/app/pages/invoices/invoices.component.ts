import {Component, OnInit} from '@angular/core';
import {of, range} from 'rxjs';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  invoices$ = of([
    {
      id: '1',
      status: 'paid',
      date: new Date(),
      month: 'January'
    },
    {
      id: '2',
      status: 'open',
      date: new Date(),
      month: 'February'
    },
    {
      id: '3',
      status: 'due',
      date: new Date(),
      month: 'March'
    },
    {
      id: '4',
      status: 'paid',
      date: new Date(),
      month: 'May'
    }
  ]);

  constructor() {
  }

  ngOnInit() {
  }

}
