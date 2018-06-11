import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as carManufacturers from './data/car-data';
import {BasicService} from '../../../../../services/basic.service';
import { Vehicle } from '../../../../../models/vehicle';
import { BasicVehicle } from '../../../../../models/basic-vehicle';

@Component({
  selector: 'app-register-car-modal',
  templateUrl: './register-car-modal.component.html',
  styleUrls: ['./register-car-modal.component.css']
})
export class RegisterCarModalComponent implements OnInit {

  @Input() opened = true;
  @Output() onOpenedToggled = new EventEmitter<boolean>();
  @Output() onNewVehicle = new EventEmitter<BasicVehicle>();

  vehicleData  = {
    license: '',
    type: '',
    brand: '',
    weight: 0,
    color: ''
  };

  carManufacturers = carManufacturers.default;
  selectedManufacturer = {models: []};
  constructor(private basicService: BasicService) { }

  ngOnInit() {}

  toggle() {
    this.opened = false;
    this.onOpenedToggled.emit(this.opened);
  }

  submitCar() {
    this.basicService.registerVehicle(this.vehicleData)
      .subscribe(vehicle => this.onNewVehicle.emit(vehicle));
  }

  change({brand}) {
    this.vehicleData.brand = brand;
  }
}
