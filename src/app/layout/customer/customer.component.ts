import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  animations:[routerTransition()]
})
export class CustomerComponent implements OnInit {
  isChangeCustomer:boolean;
  constructor() { }

  ngOnInit() {
    this.isChangeCustomer = true;
    localStorage.setItem('isChangeCustomer', 'true');
  }
  changeTheCustomer(){
    this.isChangeCustomer = true;
    localStorage.setItem('isChangeCustomer', 'true');
  }
}
