import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { RevenueByRegion } from 'src/app/models/revenue-by-region.model';
import { SalesRegionService } from 'src/app/services/sales-region.service';

@Component({
  selector: 'app-sales-revenue-by-region-chart-tile',
  templateUrl: 'sales-revenue-by-region-chart-tile.component.html'
})
export class SalesRevenueByRegionChartTileComponent
  implements OnInit, OnDestroy {
  region: string;
  dataSource: MatTableDataSource<RevenueByRegion>;

  private sub: Subscription;

  constructor(private salesRegionService: SalesRegionService) {}

  ngOnInit(): void {
    this.sub = this.salesRegionService.selectedSalesRegionChanges$.subscribe(
      region => {
        this.region = region;
        const salesByRegions = this.salesRegionService.getByRegion(region);
        this.dataSource = new MatTableDataSource(salesByRegions);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
