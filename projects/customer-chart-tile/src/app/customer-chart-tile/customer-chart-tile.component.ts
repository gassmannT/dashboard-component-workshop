import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-chart-tile',
  templateUrl: 'customer-chart-tile.component.html'
})
export class CustomerChartTileComponent implements OnInit {
  single = [
    {
      name: 'Müller AG',
      value: 89400
    },
    {
      name: 'Meyer AG',
      value: 50000
    },
    {
      name: 'Foobar AG',
      value: 72000
    },
    {
      name: 'Foo & Bar',
      value: 62000
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
