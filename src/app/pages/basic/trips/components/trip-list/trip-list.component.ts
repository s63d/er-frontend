import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Trip} from '../../../../../models/basic-invoice';
import {BasicService} from '../../../../../services/basic.service';
import {map} from 'rxjs/operators';
import {Page} from '../../../../../models/page';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  @Input() vehicleId: String;
  @Output() selectedTrips = new EventEmitter<Trip[]>();

  trips$: Observable<Trip[]>;
  page$: Observable<Page<Trip>>;
  _selectedTrips = [];

  currentPage = 1;
  constructor(private basicService: BasicService) { }

  ngOnInit() {
    this.page$ = this.basicService.trips(this.vehicleId, this.currentPage);
    this.trips$ = this.page$.pipe(
      map(page => page.content)
    );
  }

  selectedChange(event) {
    this.selectedTrips.emit(event);
  }
}
