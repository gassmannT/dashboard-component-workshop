import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CustomerChartTileComponent } from './customer-chart-tile/customer-chart-tile.component';

@NgModule({
  declarations: [CustomerChartTileComponent],
  imports: [
    BrowserModule,
    MatCardModule,
    NgxChartsModule,
    FlexLayoutModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(): void {
    const customerChartTile = createCustomElement(CustomerChartTileComponent, {
      injector: this.injector
    });
    customElements.define('customer-chart-tile', customerChartTile);
  }
}
