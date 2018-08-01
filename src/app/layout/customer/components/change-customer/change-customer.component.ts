import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';

@Component({
  selector: 'app-change-customer',
  templateUrl: './change-customer.component.html',
  styleUrls: ['./change-customer.component.scss'],
  animations: [routerTransition()]
})
export class ChangeCustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
