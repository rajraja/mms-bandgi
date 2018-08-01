import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { StatModule } from '../../shared';
import { CustomerRoutingModule } from './customer-routing.module';

import { CustomerComponent } from './customer.component';
import { ChangeCustomerComponent } from './components/change-customer/change-customer.component';


@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    CustomerRoutingModule,
    StatModule
  ],
  declarations: [
    CustomerComponent, 
    ChangeCustomerComponent
  ]
})
export class CustomerModule { }
