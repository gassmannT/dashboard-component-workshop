import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherForecast } from '../models/weather-forecast.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-tile',
  templateUrl: 'weather-tile.component.html'
})
export class WeatherTileComponent implements OnChanges {
  @Input()
  location: string;

  foo$: Observable<WeatherForecast>;

  constructor(private cdr: ChangeDetectorRef, private weatherService: WeatherService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.location) {
      this.foo$ = this.weatherService.get(this.location);
    }
  }
}
