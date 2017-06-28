import {Routes, RouterModule, Resolve, ActivatedRouteSnapshot} from '@angular/router';

import {CatalogoComponent} from './catalogo.component';

import {CatalogoConmemorativasComponent} from './conmemorativas/conmemorativas.component';
import {CatalogoSeriesComponent} from './series/series.component';
import {CanActivateAuthGuard} from "app/can-activate.authguard";
import {Injectable} from "@angular/core";
import {ConmemorativasPaisService} from "app/catalogo/conmemorativas/conmemorativas-pais.service";
import {Observable} from "rxjs/Observable";
import {ConmemorativasAnosService} from "app/catalogo/conmemorativas/conmemorativas-ano.service";

// CARGA DE BASE DE DATOS EL LISTADO PREVIAMENTE A CARGAR LA VISTA - POR PAISES
@Injectable()
export class LoadMonedasConmemorativasPaisResolver implements Resolve<any> {
    constructor(private conmemorativasPaisService: ConmemorativasPaisService) {}

    resolve (route: ActivatedRouteSnapshot): Observable<any> {
        return this.conmemorativasPaisService.getListadoMonedasPaises();
    }
}

// CARGA DE BASE DE DATOS EL LISTADO PREVIAMENTE A CARGAR LA VISTA - POR ANOS
@Injectable()
export class LoadMonedasConmemorativasAnosResolver implements Resolve<any> {
    constructor(private conmemorativasAnosService: ConmemorativasAnosService) {}

    resolve (route: ActivatedRouteSnapshot): Observable<any> {
        return this.conmemorativasAnosService.getListadoMonedasAnos();
    }
}

export const CatalogoRoutes: Routes = [
    {
        path: '',
        component: CatalogoComponent,
        children: [
            {path: '', redirectTo: '/app/catalogo/conmemorativas', pathMatch: 'full'},
            {path: 'conmemorativas', component: CatalogoConmemorativasComponent, canActivate: [CanActivateAuthGuard], resolve: {listadoMonedasPaises: LoadMonedasConmemorativasPaisResolver, listadoMonedasAnos: LoadMonedasConmemorativasAnosResolver}},
            {path: 'series', component: CatalogoSeriesComponent, canActivate: [CanActivateAuthGuard]}
        ]
    }
];

export const CatalogoRoutingModule = RouterModule.forChild(CatalogoRoutes);
