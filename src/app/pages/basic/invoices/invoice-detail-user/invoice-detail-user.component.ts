import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-invoice-detail-user',
  templateUrl: './invoice-detail-user.component.html',
  styleUrls: ['./invoice-detail-user.component.css']
})
export class InvoiceDetailUserComponent implements OnInit {


  invoices = [
    {
      'user': {
        'id': 1,
        'firstName': 'Goos',
        'lastName': 'van den Bekerom',
        'address': 'Ekkerstraat 28',
        'postal': '5616 SP',
        'city': 'Eindhoven',
        'email': 'goosje@hotmail.com'
      },
      'vehicleId': '4e40d2ad694070612392676275598054',
      'date': '2018-06-13T11:05:21.000+0000',
      'status': 'OPEN',
      'lines': [
        {
          'id': 4703,
          'tripId': 8,
          'distance': 0,
          'price': 0,
          'parts': []
        }
      ],
      'price': 0,
      'distance': 0,
      'id': 4702
    },
    {
      'user': {
        'id': 1,
        'firstName': 'Goos',
        'lastName': 'van den Bekerom',
        'address': 'Ekkerstraat 28',
        'postal': '5616 SP',
        'city': 'Eindhoven',
        'email': 'goosje@hotmail.com'
      },
      'vehicleId': 'cf03efdc396d771162d9c38858bcfadc',
      'date': '2018-06-13T11:05:21.000+0000',
      'status': 'OPEN',
      'lines': [
        {
          'id': 4705,
          'tripId': 5,
          'distance': 0,
          'price': 0,
          'parts': []
        },
        {
          'id': 4706,
          'tripId': 6,
          'distance': 0,
          'price': 0,
          'parts': []
        },
        {
          'id': 4707,
          'tripId': 7,
          'distance': 176189,
          'price': 4.175,
          'parts': [
            {
              'id': 4648,
              'tripId': 7,
              'price': 1.05,
              'distance': 42370,
              'vat': 20,
              'origin': 'AT',
              'details': [
                {
                  'id': 4649,
                  'rate': 0.025,
                  'description': 'Vehicle has label B, 0.025 * 42370 (rate x distance)'
                }
              ]
            },
            {
              'id': 4650,
              'tripId': 7,
              'price': 3.125,
              'distance': 125277,
              'vat': 20,
              'origin': 'AT',
              'details': [
                {
                  'id': 4651,
                  'rate': 0.025,
                  'description': 'Vehicle has label B, 0.025 * 125277 (rate x distance)'
                }
              ]
            },
            {
              'id': 4652,
              'tripId': 7,
              'price': 0,
              'distance': 8542,
              'vat': 6,
              'origin': 'BE',
              'details': [
                {
                  'id': 4653,
                  'rate': 0,
                  'description': 'Vehicle has category b, price is calculated with: 0.0 * 8542 (rate * distance)'
                }
              ]
            }
          ]
        }
      ],
      'price': 4.175,
      'distance': 176189,
      'id': 4704
    },
    {
      'user': {
        'id': 1,
        'firstName': 'Goos',
        'lastName': 'van den Bekerom',
        'address': 'Ekkerstraat 28',
        'postal': '5616 SP',
        'city': 'Eindhoven',
        'email': 'goosje@hotmail.com'
      },
      'vehicleId': '07811bd12cfa6b73b0a18133e576a640',
      'date': '2018-06-13T11:05:21.000+0000',
      'status': 'OPEN',
      'lines': [
        {
          'id': 4709,
          'tripId': 9,
          'distance': 176189,
          'price': 89.595,
          'parts': [
            {
              'id': 4654,
              'tripId': 9,
              'price': 1.05,
              'distance': 42370,
              'vat': 20,
              'origin': 'AT',
              'details': [
                {
                  'id': 4655,
                  'rate': 0.025,
                  'description': 'Vehicle has label B, 0.025 * 42370 (rate x distance)'
                }
              ]
            },
            {
              'id': 4656,
              'tripId': 9,
              'price': 3.125,
              'distance': 125277,
              'vat': 20,
              'origin': 'AT',
              'details': [
                {
                  'id': 4657,
                  'rate': 0.025,
                  'description': 'Vehicle has label B, 0.025 * 125277 (rate x distance)'
                }
              ]
            },
            {
              'id': 4658,
              'tripId': 9,
              'price': 85.42,
              'distance': 8542,
              'vat': 6,
              'origin': 'BE',
              'details': [
                {
                  'id': 4659,
                  'rate': 0.01,
                  'description': 'Vehicle has category f, price is calculated with: 0.01 * 8542 (rate * distance)'
                }
              ]
            }
          ]
        }
      ],
      'price': 89.595,
      'distance': 176189,
      'id': 4708
    },
    {
      'user': {
        'id': 1,
        'firstName': 'Goos',
        'lastName': 'van den Bekerom',
        'address': 'Ekkerstraat 28',
        'postal': '5616 SP',
        'city': 'Eindhoven',
        'email': 'goosje@hotmail.com'
      },
      'vehicleId': '29a93f0560f7ffe901c2df59b5465bf1',
      'date': '2018-06-13T11:05:21.000+0000',
      'status': 'OPEN',
      'lines': [
        {
          'id': 4711,
          'tripId': 10,
          'distance': 176189,
          'price': 89.595,
          'parts': [
            {
              'id': 4660,
              'tripId': 10,
              'price': 85.42,
              'distance': 8542,
              'vat': 6,
              'origin': 'BE',
              'details': [
                {
                  'id': 4661,
                  'rate': 0.01,
                  'description': 'Vehicle has category c, price is calculated with: 0.01 * 8542 (rate * distance)'
                }
              ]
            },
            {
              'id': 4662,
              'tripId': 10,
              'price': 1.05,
              'distance': 42370,
              'vat': 20,
              'origin': 'AT',
              'details': [
                {
                  'id': 4663,
                  'rate': 0.025,
                  'description': 'Vehicle has label B, 0.025 * 42370 (rate x distance)'
                }
              ]
            },
            {
              'id': 4664,
              'tripId': 10,
              'price': 3.125,
              'distance': 125277,
              'vat': 20,
              'origin': 'AT',
              'details': [
                {
                  'id': 4665,
                  'rate': 0.025,
                  'description': 'Vehicle has label B, 0.025 * 125277 (rate x distance)'
                }
              ]
            }
          ]
        },
        {
          'id': 4712,
          'tripId': 11,
          'distance': 176189,
          'price': 89.595,
          'parts': [
            {
              'id': 4666,
              'tripId': 11,
              'price': 1.05,
              'distance': 42370,
              'vat': 20,
              'origin': 'AT',
              'details': [
                {
                  'id': 4667,
                  'rate': 0.025,
                  'description': 'Vehicle has label B, 0.025 * 42370 (rate x distance)'
                }
              ]
            },
            {
              'id': 4668,
              'tripId': 11,
              'price': 3.125,
              'distance': 125277,
              'vat': 20,
              'origin': 'AT',
              'details': [
                {
                  'id': 4669,
                  'rate': 0.025,
                  'description': 'Vehicle has label B, 0.025 * 125277 (rate x distance)'
                }
              ]
            },
            {
              'id': 4670,
              'tripId': 11,
              'price': 85.42,
              'distance': 8542,
              'vat': 6,
              'origin': 'BE',
              'details': [
                {
                  'id': 4671,
                  'rate': 0.01,
                  'description': 'Vehicle has category e, price is calculated with: 0.01 * 8542 (rate * distance)'
                }
              ]
            }
          ]
        }
      ],
      'price': 179.19,
      'distance': 352378,
      'id': 4710
    }
  ];
  invoice;

  constructor(private route: ActivatedRoute) {

    route.params.pipe(
      map(params => {
        const invoiceId = params.invoiceId;
        return this.invoices.filter(invoice => invoice.id == invoiceId)[0];
      })
    ).subscribe(invoice => {
      this.invoice = invoice;
    });
  }

  ngOnInit() {}

}
