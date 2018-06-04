import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as carManufacturers from './data/car-data';
import {BasicService} from '../../../../../services/basic.service';

@Component({
  selector: 'app-register-car-modal',
  templateUrl: './register-car-modal.component.html',
  styleUrls: ['./register-car-modal.component.css']
})
export class RegisterCarModalComponent implements OnInit {

  @Input() opened = true;
  @Output() toggledOpened = new EventEmitter<boolean>();

  vehicleData  = {
    license: '39-GLD-9',
    type: '',
    brand: '',
    weight: 0,
    color: ''
  };

  carManufacturers = carManufacturers.default;
  selectedManufacturer = {models: []};
  constructor(private basicService: BasicService) { }

  ngOnInit() {
  }

  toggle() {
    this.opened = false;
    this.toggledOpened.emit(this.opened);
  }


  submitCar() {
    this.basicService.registerVehicle(this.vehicleData).subscribe(console.log);
  }

  change({brand}) {
    this.vehicleData.brand = brand;
  }
}
