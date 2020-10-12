import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DynamicLoaderComponent } from './components/dynamic-loader/dynamic-loader.component';
import { FilterCriteriaComponent } from './components/filter-criteria/filter-criteria.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsTileComponent } from './components/tiles/projects/projects-tile.component';
import { SalesRevenueByRegionChartTileComponent } from './components/tiles/sales-revenue-by-region-chart/sales-revenue-by-region-chart-tile.component';
import { SalesRevenueChartTileComponent } from './components/tiles/sales-revenue-chart/sales-revenue-chart-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SalesRevenueChartTileComponent,
    DynamicLoaderComponent,
    SalesRevenueByRegionChartTileComponent,
    ProjectsTileComponent,
    FilterCriteriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    FlexLayoutModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
