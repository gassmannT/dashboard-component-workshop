import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RevenueByRegion } from '../models/revenue-by-region.model';

@Injectable({ providedIn: 'root' })
export class SalesRegionService {
  private selectedSalesRegionSource = new BehaviorSubject<string>(null);
  selectedSalesRegionChanges$ = this.selectedSalesRegionSource.asObservable();

  changeSalesRegion(region: string): void {
    this.selectedSalesRegionSource.next(region);
  }

  getByRegion(region: string): RevenueByRegion[] {
    if (region === 'Spain') {
      return [
        { name: 'Andalucía', revenue: 1.0079 },
        { name: 'Catalunya', revenue: 4.0026 },
        { name: 'Galicia', revenue: 6.9413 },
        { name: 'Comunidad Valenciana', revenue: 9.0122 }
      ];
    } else if (region === 'Italy') {
      return [
        { name: 'Lombardei', revenue: 2.0108 },
        { name: 'Piemont', revenue: 3.0202 },
        { name: 'Venetien', revenue: 4.1292 },
        { name: 'Toskana', revenue: 5.8421 }
      ];
    } else if (region === 'France') {
      return [
        { name: 'Bretagne', revenue: 1.529 },
        { name: 'Côte dAzur', revenue: 3.1067 },
        { name: 'Ile-de-France', revenue: 4.864 },
        { name: 'Normondie', revenue: 5.6541 }
      ];
    }
  }
}
