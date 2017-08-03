import {RouterModule, Routes} from '@angular/router';

import {LayoutComponent} from './layout/layout.component';
//import {DashboardComponent} from './dashboard/dashboard.component';

// Page Layouts
import {PageLayoutFullscreenComponent} from './page-layouts/fullscreen/fullscreen.component';
import {PortadaComponent} from "./portada/portada.component";
import {CanActivateAuthGuard} from "./can-activate.authguard";


const AppRoutes: Routes = [
    {path: '', redirectTo: '/portada/login', pathMatch: 'full'},
    {path: 'portada', component: PortadaComponent, canActivate: [CanActivateAuthGuard]},
    {path: 'app', component: LayoutComponent, canActivate: [CanActivateAuthGuard]},
    {path: 'extra', loadChildren: './extra-pages/extra-pages.module#ExtraPagesModule', canActivate: [CanActivateAuthGuard]},
    {path: 'fullscreen', component: PageLayoutFullscreenComponent, canActivate: [CanActivateAuthGuard]},
    {path: '**', redirectTo: '/app/dashboard', pathMatch: 'full'},
];

export const AppRoutingModule = RouterModule.forRoot(AppRoutes, {useHash: true});
