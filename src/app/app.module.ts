import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemperatureConvertorComponent } from './temperature-convertor/temperature-convertor.component';
import { FormsModule } from '@angular/forms';
import { TwoDecimalNumberDirective } from './two-decimal-number.directive';

@NgModule({
  declarations: [AppComponent, TemperatureConvertorComponent, TwoDecimalNumberDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
