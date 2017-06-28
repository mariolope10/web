import {Routes, RouterModule} from '@angular/router';

import {PortadaComponent} from './portada.component';

import {PortadaLoginComponent} from './login/login.component';
import {PortadaRegistroComponent} from './sign-up/sign-up.component';

export const PortadaRoutes: Routes = [
    {
        path: 'portada',
        component: PortadaComponent,
        children: [
            {path: '', redirectTo: '/portada/login', pathMatch: 'full'},
            {path: 'login', component: PortadaLoginComponent},
            {path: 'registro', component: PortadaRegistroComponent}
        ]
    }
];

export const PortadaRoutingModule = RouterModule.forChild(PortadaRoutes);
