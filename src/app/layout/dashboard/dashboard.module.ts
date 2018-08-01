import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';

import {DevicelistComponent} from './components/devicelist/devicelist.component';

import { StatModule } from '../../shared';
import { AlarmListComponent } from './components/alarm-list/alarm-list.component';
import { PageHeaderModule } from '../../shared';
import { GridViewComponent } from './components/grid-view/grid-view.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule,
        DataTablesModule,
        PageHeaderModule
    ],
    declarations: [
        DashboardComponent,
        DevicelistComponent,
        DevicelistComponent,
        AlarmListComponent,
        GridViewComponent
    ],
    providers: [DashboardService],
})
export class DashboardModule {}
