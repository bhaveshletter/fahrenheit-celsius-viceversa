import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-termperature-convertor',
  templateUrl: './termperature-convertor.component.html',
  styleUrls: ['./termperature-convertor.component.sass'],
})
export class TermperatureConvertorComponent implements OnInit, OnChanges {
  _cel: any;
  _fah: any;

  get cel(): string {
    return this._cel;
  }

  set cel(value: string) {
    if (value) {
      this._cel = value;
      this._fah = ((this._cel * 9) / 5 + 32).toFixed(1);
    } else {
      this.resetCelFah();
    }
  }

  get fah(): string {
    return this._fah;
  }

  set fah(value: string) {
    if (value) {
      this._fah = value;
      this._cel = (((this._fah - 32) * 5) / 9).toFixed(1);
    } else {
      this.resetCelFah();
    }
  }

  resetCelFah() {
    this._fah = '';
    this._cel = '';
  }

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges() {}
}
