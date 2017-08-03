import {NgModule, LOCALE_ID} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

import {PortadaRoutingModule} from './portada-routing.module';
import {PortadaComponent} from './portada.component';

import {PortadaLoginComponent} from './login/login.component';
import {PortadaRegistroComponent} from './sign-up/sign-up.component';
import {AuthenticationService} from "./authentication.service";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        PortadaRoutingModule
    ],
    declarations: [
        PortadaComponent,
        PortadaLoginComponent,
        PortadaRegistroComponent
    ],
    entryComponents: [
        PortadaLoginComponent,
        PortadaRegistroComponent
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: "es-ES"
        },
        AuthenticationService
    ]
})

export class PortadaModule {}