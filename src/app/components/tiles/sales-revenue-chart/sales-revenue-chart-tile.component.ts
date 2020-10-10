import { Component, OnInit } from '@angular/core';
import { SalesRegionService } from 'src/app/services/sales-region.service';

@Component({
  selector: 'app-sales-revenue-chart-tile',
  templateUrl: 'sales-revenue-chart-tile.component.html'
})
export class SalesRevenueChartTileComponent implements OnInit {
  constructor(private salesRegionService: SalesRegionService) {}

  data: object = {};

  ngOnInit(): void {
    this.data = [
      {
        name: 'Spain',
        value: 100
      },
      {
        name: 'Italy',
        value: 105
      },
      {
        name: 'France',
        value: 108
      }
    ];
  }

  onSelect({name}): void {
    this.salesRegionService.changeSalesRegion(name);
  }
}
