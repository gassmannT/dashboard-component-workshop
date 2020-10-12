import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherForecast } from '../models/weather-forecast.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-tile',
  templateUrl: 'weather-tile.component.html',
  styles: [
    `
      .mat-card {
        background-color: white;
      }

      .mat-card-header-text {
        margin: 0 !important;
        font-weight: bold !important;
      }
    `
  ],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class WeatherTileComponent implements OnChanges {
  @Input()
  location: string;

  weatherForecast$: Observable<WeatherForecast>;

  constructor(
    private cdr: ChangeDetectorRef,
    private weatherService: WeatherService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.location) {
      this.weatherForecast$ = this.weatherService.get(this.location);
    }
  }
}
