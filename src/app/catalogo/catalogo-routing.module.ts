import {Routes, RouterModule, Resolve, ActivatedRouteSnapshot} from '@angular/router';

import {CatalogoComponent} from './catalogo.component';

import {CatalogoConmemorativasComponent} from './conmemorativas/conmemorativas.component';
import {CatalogoSeriesComponent} from './series/series.component';
import {CanActivateAuthGuard} from "app/can-activate.authguard";
import {Injectable} from "@angular/core";
import {ConmemorativasPaisService} from "app/catalogo/conmemorativas/conmemorativas.pais.service";
import {Observable} from "rxjs/Observable";

// CARGA DE BASE DE DATOS EL LISTADO PREVIAMENTE A CARGAR LA VISTA
@Injectable()
export class LoadMonedasConmemorativasResolver implements Resolve<any> {
    constructor(private myService: ConmemorativasPaisService) {}

    resolve (route: ActivatedRouteSnapshot): Observable<any> {
        return this.myService.getListadoMonedasPaises();
    }
}

export const CatalogoRoutes: Routes = [
    {
        path: '',
        component: CatalogoComponent,
        children: [
            {path: '', redirectTo: '/app/catalogo/conmemorativas', pathMatch: 'full'},
            {path: 'conmemorativas', component: CatalogoConmemorativasComponent, canActivate: [CanActivateAuthGuard], resolve: {listadoMonedasPaises: LoadMonedasConmemorativasResolver}},
            {path: 'series', component: CatalogoSeriesComponent, canActivate: [CanActivateAuthGuard]}
        ]
    }
];

export const CatalogoRoutingModule = RouterModule.forChild(CatalogoRoutes);
