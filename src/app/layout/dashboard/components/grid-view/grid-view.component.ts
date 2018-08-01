import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { DashboardService } from '../../dashboard.service';
@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
  animations: [routerTransition()]
})
export class GridViewComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons: any;
  tokenResponse: any;
  gridData: any;
  userDetails:any;
  isGridView:boolean;
  constructor(public dashboardService: DashboardService) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem("userDetails"));
    this.isGridView = JSON.parse(localStorage.getItem("isGridView"));
    if(this.isGridView){
        localStorage.removeItem('isGridView');
        this.dashboardService.loadGridData(this.userDetails.customerid)
        .then(gridData => {
            this.gridData = gridData;
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
