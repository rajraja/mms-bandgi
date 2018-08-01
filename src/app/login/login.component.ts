import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { routerTransition } from '../router.animations';
import { LoginService } from './login.service';
import { log } from 'util';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;
    loginErrorMessage: string;
    userDetailsError: {}; null
    constructor(public router: Router, public loginService: LoginService, private spinner: NgxSpinnerService) { }

    ngOnInit() {

    }
    onLoggedin() {
        /** spinner starts on init */
        this.spinner.show();
        // end
        this.loginService.userAuthenticate(this.username, this.password)
            .then(tokenResponse => {
                this.loginService.getUserdetails(tokenResponse)
                    .then(userDetails => {
                        // set the userdetails in local storage.
                        localStorage.setItem("tokenResponse", JSON.stringify(tokenResponse));
                        localStorage.setItem('userDetails', JSON.stringify(userDetails));
                        localStorage.setItem('isLoggedin', 'true');
                        this.router.navigate(['/dashboard']);
                        // end
                    }).catch(errorResponse => {
                        this.userDetailsError = errorResponse.error.message;
                        this.spinner.hide();
                    });
            }).catch(errorResponse => {
                this.loginErrorMessage = errorResponse.error.message;
                this.spinner.hide();
            });
    }
    onUserPasswordChange() {
        this.loginErrorMessage = null;
    }
}
