import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WeatherForecast } from '../models/weather-forecast.model';

@Injectable({ providedIn: 'root' })
export class WeatherService {

  get(location: string): Observable<WeatherForecast> {
    if (location) {
      const code = location.charCodeAt(0);

      if (code < 70) {
        return of({
          weather: 'Sunny',
          degree: 27
        });
      } else if (code < 75) {
        return of({
          weather: 'Cloudy',
          degree: 23
        });
      } else if (code < 80) {
        return of({
          weather: 'Light Rain',
          degree: 18
        });
      } else if (code < 95) {
        return of({
          weather: 'Heavy Rain',
          degree: 14
        });
      } else {
        return of({
          weather: 'Thunder',
          degree: 11
        });
      }
    }
  }
}
