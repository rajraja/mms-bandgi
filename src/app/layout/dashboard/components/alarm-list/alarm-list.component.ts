import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { DashboardService } from '../../dashboard.service';

@Component({
    selector: 'app-alarm-list',
    templateUrl: './alarm-list.component.html',
    styleUrls: ['./alarm-list.component.scss'],
    animations: [routerTransition()]
})
export class AlarmListComponent implements OnInit {

    dtOptions: DataTables.Settings = {};
    persons: any;
    tokenResponse: any;
    alarms: any;
    userDetails: any;
    isAlarmList: boolean;

    constructor(public dashboardService: DashboardService) { }

    ngOnInit(): void {
        this.tokenResponse = JSON.parse(localStorage.getItem("tokenResponse"));
        this.userDetails = JSON.parse(localStorage.getItem("userDetails"));
        this.isAlarmList = JSON.parse(localStorage.getItem("isAlarmList"));
        if (this.isAlarmList) {
            localStorage.removeItem('isAlarmList');
            this.dashboardService.loadAlarms(this.userDetails.customerid)
                .then(alarms => {
                    this.alarms = alarms;
                    this.dtOptions = {
                        // dom: '<ilpft>',
                        pagingType: 'full_numbers',
                        scrollY: '370',
                        autoWidth: true,
                        responsive: true,
                        pageLength: 100,
                        order: [[1, "desc"]]
                    };
                }).catch(errorResponse => {

                });
        }
    }
}
