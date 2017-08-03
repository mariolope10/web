import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication.service";

@Component({
    selector: 'login',
    styles: [],
    templateUrl: './login.component.html'
})

export class PortadaLoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) {}

    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();
        
        if (this.authenticationService.isLoggedIn()) {
            // logged in so return true
            this.router.navigate(['app/catalogo/conmemorativas']);
        }
    }

    login() {
        //this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.getMe();

                } else {
                    // login failed
                    this.error = 'Username o password es incorrecto';
                    //this.loading = false;
                }
            }, error => {
                //this.loading = false;
                this.error = error;
            });
    }

    getMe() {
        //this.loading = true;
        this.authenticationService.getMe()
            .subscribe(result => {
                if (result === true) {
                    // datos falló
                    this.router.navigate(['app/catalogo']);
                    
                } else {
                    // datos ok
                    this.error = 'Falló al extraer los datos del usuario';
                    //this.loading = false;
                }
            }, error => {
                //this.loading = false;
                this.error = error;
            });
    }
}
