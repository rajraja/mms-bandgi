import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

@NgModule({
    imports: [CommonModule, LoginRoutingModule, FormsModule, ReactiveFormsModule, NgxSpinnerModule],
    declarations: [LoginComponent],
    providers: [LoginService],
})
export class LoginModule {}
