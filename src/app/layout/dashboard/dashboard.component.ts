import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';



@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    isAlarmList:boolean= false;
    isDeviceList:boolean= false;
    isGridView:boolean= false;
    constructor() { }

    ngOnInit(): void {
        this.isDeviceList = true;
        localStorage.setItem('isDeviceList', 'true');
        this.isGridView = false;
        this.isAlarmList = false;
    }
    alarmList(){
        this.isAlarmList = true;
        localStorage.setItem('isAlarmList', 'true');
        this.isDeviceList = false;
        this.isGridView = false;
    }
    deviceList(){
        this.isDeviceList = true;
        localStorage.setItem('isDeviceList', 'true');
        this.isGridView = false;
        this.isAlarmList = false;
    }
    gridView(){
        this.isGridView = true;
        localStorage.setItem('isGridView', 'true');
        this.isDeviceList = false;
        this.isAlarmList = false;
    }
}
