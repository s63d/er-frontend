import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as carManufacturers from './data/car-data';

@Component({
  selector: 'app-register-car-modal',
  templateUrl: './register-car-modal.component.html',
  styleUrls: ['./register-car-modal.component.css']
})
export class RegisterCarModalComponent implements OnInit {

  @Input() opened = true;
  @Output() toggledOpened = new EventEmitter<boolean>();

  carManufacturers = carManufacturers.default;
  selectedManufacturer = {models: []};
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.opened = false;
    this.toggledOpened.emit(this.opened);
  }
}
