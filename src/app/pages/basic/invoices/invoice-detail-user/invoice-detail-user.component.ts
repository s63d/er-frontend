import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-detail-user',
  templateUrl: './invoice-detail-user.component.html',
  styleUrls: ['./invoice-detail-user.component.css']
})
export class InvoiceDetailUserComponent implements OnInit {


  invoice = {
    'userId': 1,
    'date': '2018-06-11T10:54:11.000+0000',
    'status': 'OPEN',
    'rate': {
      'category': 'A',
      'price': 0.001
    },
    'invoiceLine': [
      {
        'id': 15,
        'tripId': 8,
        'length': 6473,
        'rate': {
          'category': 'A',
          'price': 0.001
        },
        'price': 0.006473
      }
    ],
    'price': 0.006473,
    'id': 14
  };

  constructor() { }

  ngOnInit() {

  }

}
