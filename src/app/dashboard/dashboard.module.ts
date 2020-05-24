import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { dashboardRoutes } from './dashboard.routes';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart';
import { NgxsModule } from '@ngxs/store';
import { DashboardState } from './dashboard.state';

@NgModule({
  declarations: [
    DashboardComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    NgxsModule.forFeature([DashboardState]),
  ],
})
export class DashboardModule { }
