import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProjectsTileComponent } from '../components/tiles/projects/projects-tile.component';
import { SalesRevenueByRegionChartTileComponent } from '../components/tiles/sales-revenue-by-region-chart/sales-revenue-by-region-chart-tile.component';
import { SalesRevenueChartTileComponent } from './../components/tiles/sales-revenue-chart/sales-revenue-chart-tile.component';
import { DashboardConfig } from './../models/dashboard-config.model';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  get(type: string): Observable<DashboardConfig> {
    if (type === 'sales') {
      return of({
        type: 'sales',
        tiles: [
          {
            name: 'Sales Revenue',
            component: SalesRevenueChartTileComponent
          },
          {
            name: 'Sales Revenue by Region',
            component: SalesRevenueByRegionChartTileComponent
          },
          {
            name: 'Top Customers (CE)',
            component: 'customer-chart-tile'
          },
          {
            name: 'Weather (CE)',
            component: 'weather-tile',
            params: { location: 'Zürich' }
          },
          {
            name: 'Current Projects',
            component: ProjectsTileComponent
          }
        ]
      });
    }
    // // else if (type === 'systems') {
    // //   return of({
    // //     type: 'systems',
    // //     tiles: [
    // //       {
    // //         name: 'runningSystems',
    // //         component: SalesRevenueChartTileComponent
    // //       }
    // //     ]
    // //   });
    // // }
  }
}
