import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-detail-user',
  templateUrl: './invoice-detail-user.component.html',
  styleUrls: ['./invoice-detail-user.component.css']
})
export class InvoiceDetailUserComponent implements OnInit {


  invoice =  [
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
      'date': '2018-06-13T10:48:32.000+0000',
      'status': 'OPEN',
      'lines': [
        {
          'id': 4630,
          'tripId': 8,
          'distance': 176189,
          'price': 4.175,
          'parts': [
            {
              'id': 4557,
              'tripId': 8,
              'price': 0,
              'distance': 8542,
              'vat': 6,
              'origin': 'BE',
              'details': [
                {
                  'id': 4558,
                  'rate': 0,
                  'description': 'Vehicle has category a, price is calculated with: 0.0 * 8542 (rate * distance)'
                }
              ]
            },
            {
              'id': 4577,
              'tripId': 8,
              'price': 1.05,
              'distance': 42370,
              'vat': 20,
              'origin': 'AT',
              'details': [
                {
                  'id': 4578,
                  'rate': 0.025,
                  'description': 'Vehicle has label B, 0.025 * 42370 (rate x distance)'
                }
              ]
            },
            {
              'id': 4581,
              'tripId': 8,
              'price': 3.125,
              'distance': 125277,
              'vat': 20,
              'origin': 'AT',
              'details': [
                {
                  'id': 4582,
                  'rate': 0.025,
                  'description': 'Vehicle has label B, 0.025 * 125277 (rate x distance)'
                }
              ]
            }
          ]
        }
      ],
      'price': 4.175,
      'id': 4629
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
      'date': '2018-06-13T10:48:32.000+0000',
      'status': 'OPEN',
      'lines': [
        {
          'id': 4632,
          'tripId': 5,
          'distance': 0,
          'price': 0,
          'parts': []
        },
        {
          'id': 4633,
          'tripId': 6,
          'distance': 0,
          'price': 0,
          'parts': []
        },
        {
          'id': 4634,
          'tripId': 7,
          'distance': 176189,
          'price': 4.175,
          'parts': [
            {
              'id': 4551,
              'tripId': 7,
              'price': 1.05,
              'distance': 42370,
              'vat': 20,
              'origin': 'AT',
              'details': [
                {
                  'id': 4552,
                  'rate': 0.025,
                  'description': 'Vehicle has label B, 0.025 * 42370 (rate x distance)'
                }
              ]
            },
            {
              'id': 4553,
              'tripId': 7,
              'price': 3.125,
              'distance': 125277,
              'vat': 20,
              'origin': 'AT',
              'details': [
                {
                  'id': 4554,
                  'rate': 0.025,
                  'description': 'Vehicle has label B, 0.025 * 125277 (rate x distance)'
                }
              ]
            },
            {
              'id': 4555,
              'tripId': 7,
              'price': 0,
              'distance': 8542,
              'vat': 6,
              'origin': 'BE',
              'details': [
                {
                  'id': 4556,
                  'rate': 0,
                  'description': 'Vehicle has category a, price is calculated with: 0.0 * 8542 (rate * distance)'
                }
              ]
            }
          ]
        }
      ],
      'price': 4.175,
      'id': 4631
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
      'date': '2018-06-13T10:48:32.000+0000',
      'status': 'OPEN',
      'lines': [
        {
          'id': 4636,
          'tripId': 9,
          'distance': 176189,
          'price': 89.595,
          'parts': [
            {
              'id': 4559,
              'tripId': 9,
              'price': 85.42,
              'distance': 8542,
              'vat': 6,
              'origin': 'BE',
              'details': [
                {
                  'id': 4560,
                  'rate': 0.01,
                  'description': 'Vehicle has category f, price is calculated with: 0.01 * 8542 (rate * distance)'
                }
              ]
            },
            {
              'id': 4583,
              'tripId': 9,
              'price': 1.05,
              'distance': 42370,
              'vat': 20,
              'origin': 'AT',
              'details': [
                {
                  'id': 4584,
                  'rate': 0.025,
                  'description': 'Vehicle has label B, 0.025 * 42370 (rate x distance)'
                }
              ]
            },
            {
              'id': 4585,
              'tripId': 9,
              'price': 3.125,
              'distance': 125277,
              'vat': 20,
              'origin': 'AT',
              'details': [
                {
                  'id': 4586,
                  'rate': 0.025,
                  'description': 'Vehicle has label B, 0.025 * 125277 (rate x distance)'
                }
              ]
            }
          ]
        }
      ],
      'price': 89.595,
      'id': 4635
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
      'date': '2018-06-13T10:48:32.000+0000',
      'status': 'OPEN',
      'lines': [
        {
          'id': 4638,
          'tripId': 10,
          'distance': 176189,
          'price': 89.595,
          'parts': [
            {
              'id': 4561,
              'tripId': 10,
              'price': 85.42,
              'distance': 8542,
              'vat': 6,
              'origin': 'BE',
              'details': [
                {
                  'id': 4562,
                  'rate': 0.01,
                  'description': 'Vehicle has category f, price is calculated with: 0.01 * 8542 (rate * distance)'
                }
              ]
            },
            {
              'id': 4587,
              'tripId': 10,
              'price': 1.05,
              'distance': 42370,
              'vat': 20,
              'origin': 'AT',
              'details': [
                {
                  'id': 4588,
                  'rate': 0.025,
                  'description': 'Vehicle has label B, 0.025 * 42370 (rate x distance)'
                }
              ]
            },
            {
              'id': 4589,
              'tripId': 10,
              'price': 3.125,
              'distance': 125277,
              'vat': 20,
              'origin': 'AT',
              'details': [
                {
                  'id': 4590,
                  'rate': 0.025,
                  'description': 'Vehicle has label B, 0.025 * 125277 (rate x distance)'
                }
              ]
            }
          ]
        },
        {
          'id': 4639,
          'tripId': 11,
          'distance': 176189,
          'price': 4.175,
          'parts': [
            {
              'id': 4563,
              'tripId': 11,
              'price': 0,
              'distance': 8542,
              'vat': 6,
              'origin': 'BE',
              'details': [
                {
                  'id': 4564,
                  'rate': 0,
                  'description': 'Vehicle has category a, price is calculated with: 0.0 * 8542 (rate * distance)'
                }
              ]
            },
            {
              'id': 4591,
              'tripId': 11,
              'price': 3.125,
              'distance': 125277,
              'vat': 20,
              'origin': 'AT',
              'details': [
                {
                  'id': 4592,
                  'rate': 0.025,
                  'description': 'Vehicle has label B, 0.025 * 125277 (rate x distance)'
                }
              ]
            },
            {
              'id': 4593,
              'tripId': 11,
              'price': 1.05,
              'distance': 42370,
              'vat': 20,
              'origin': 'AT',
              'details': [
                {
                  'id': 4594,
                  'rate': 0.025,
                  'description': 'Vehicle has label B, 0.025 * 42370 (rate x distance)'
                }
              ]
            }
          ]
        }
      ],
      'price': 93.77,
      'id': 4637
    }
  ][3];

  constructor() { }

  ngOnInit() {

  }

}
