import {Routes, RouterModule, Resolve, ActivatedRouteSnapshot} from '@angular/router';

import {CatalogoComponent} from './catalogo.component';

import {CatalogoConmemorativasComponent} from './conmemorativas/conmemorativas.component';
import {CatalogoSeriesComponent} from './series/series.component';
import {CanActivateAuthGuard} from "app/can-activate.authguard";
import {Injectable} from "@angular/core";
import {ConmemorativasPaisService} from "app/catalogo/conmemorativas/conmemorativas-pais.service";
import {Observable} from "rxjs/Observable";
import {ConmemorativasAnosService} from "app/catalogo/conmemorativas/conmemorativas-ano.service";
import {SeriesService} from "app/catalogo/series/series.service";

// CARGA DE BASE DE DATOS - CONMEMORATIVAS POR PAISES
@Injectable()
export class LoadMonedasConmemorativasPaisResolver implements Resolve<any> {
    constructor(private conmemorativasPaisService: ConmemorativasPaisService) {}

    resolve (route: ActivatedRouteSnapshot): Observable<any> {
        return this.conmemorativasPaisService.getListadoMonedasPaises();
    }
}

// CARGA DE BASE DE DATOS - CONMEMORATIVAS POR ANOS
@Injectable()
export class LoadMonedasConmemorativasAnosResolver implements Resolve<any> {
    constructor(private conmemorativasAnosService: ConmemorativasAnosService) {}

    resolve (route: ActivatedRouteSnapshot): Observable<any> {
        return this.conmemorativasAnosService.getListadoMonedasAnos();
    }
}

// CARGA DE BASE DE DATOS - SERIES
@Injectable()
export class LoadSeriesResolver implements Resolve<any> {
    constructor(private seriesService: SeriesService) {}

    resolve (route: ActivatedRouteSnapshot): Observable<any> {
        return this.seriesService.getListadoSeries();
    }
}

export const CatalogoRoutes: Routes = [
    {
        path: '',
        component: CatalogoComponent,
        children: [
            {path: '', redirectTo: '/app/catalogo/conmemorativas', pathMatch: 'full'},
            {path: 'conmemorativas', component: CatalogoConmemorativasComponent, canActivate: [CanActivateAuthGuard], resolve: {listadoMonedasPaises: LoadMonedasConmemorativasPaisResolver, listadoMonedasAnos: LoadMonedasConmemorativasAnosResolver}},
            {path: 'series', component: CatalogoSeriesComponent, canActivate: [CanActivateAuthGuard], resolve: {listadoSeries: LoadSeriesResolver}}
        ]
    }
];

export const CatalogoRoutingModule = RouterModule.forChild(CatalogoRoutes);
