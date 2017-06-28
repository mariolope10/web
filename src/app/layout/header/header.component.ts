import {Component, OnInit} from '@angular/core';
import {APPCONFIG} from '../../config';
import {AuthenticationService} from "app/portada/authentication.service";

@Component({
    selector: 'my-app-header',
    styles: [],
    providers: [AuthenticationService],
    templateUrl: './header.component.html'
})

export class AppHeaderComponent implements OnInit {
    public AppConfig: any;

    ngOnInit() {
        this.AppConfig = APPCONFIG;
    }

    constructor(private authenticationService: AuthenticationService) {}

    logout() {
        this.authenticationService.logout();
    }
}
