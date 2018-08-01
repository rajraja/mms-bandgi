import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-devicelist',
  templateUrl: './devicelist.component.html',
  styleUrls: ['./devicelist.component.scss'],
  animations: [routerTransition()]
})
export class DevicelistComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    persons: any;
    tokenResponse: any;
    devices: any;
    userDetails:any;
    isDeviceList:boolean;
    constructor(public dashboardService: DashboardService) { }

    ngOnInit(): void {
        
        this.userDetails = JSON.parse(localStorage.getItem("userDetails"));
        this.isDeviceList = JSON.parse(localStorage.getItem("isDeviceList"));
        if(this.isDeviceList){
            localStorage.removeItem('isDeviceList');
            this.dashboardService.loadDevices(this.userDetails.customerid)
            .then(devices => {
                this.devices = devices;
                this.dtOptions = {
                    // dom: '<ilpft>',
                    pagingType: 'full_numbers',
                    scrollY: '410',
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
