import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardConfig } from 'src/app/models/dashboard-config.model';
import { DashboardService } from './../../services/dashboard.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  dashboardConfig$: Observable<DashboardConfig>;

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.dashboardConfig$ = this.dashboardService.get(data.type);
    });
  }
}
