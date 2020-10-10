import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherTileComponent } from './weather-tile/weather-tile.component';


@NgModule({
  declarations: [WeatherTileComponent],
  imports: [BrowserModule, MatCardModule],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const customerChartTile = createCustomElement(WeatherTileComponent, {
      injector: this.injector
    });
    customElements.define('weather-tile', customerChartTile);
  }
}
