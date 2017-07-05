import {Routes, RouterModule, Resolve, ActivatedRouteSnapshot} from '@angular/router';

import {CatalogoComponent} from './catalogo.component';

import {CanActivateAuthGuard} from "app/can-activate.authguard";
import {Injectable} from "@angular/core";

import {SeriesService} from "app/catalogo/series/series.service";
import {ConmemorativasPaisComponent} from "app/catalogo/conmemorativas/pais/conmemorativas-pais.component";
import {ConmemorativasAnoComponent} from "app/catalogo/conmemorativas/ano/conmemorativas-ano.component";
import {ConmemorativasPaisService} from "app/catalogo/conmemorativas/pais/conmemorativas-pais.service";
import {DetalleConmemorativasAnoComponent} from "app/catalogo/conmemorativas/ano/detalle/detalle-conmemorativas-ano.component";
import {DetalleConmemorativasPaisComponent} from "app/catalogo/conmemorativas/pais/detalle/detalle-conmemorativas-pais.component";
import {ConmemorativasAnosService} from "app/catalogo/conmemorativas/ano/conmemorativas-ano.service";

// CARGA DE BASE DE DATOS - SERIES
@Injectable()
export class LoadSeriesResolver implements Resolve<any> {
    constructor(private seriesService: SeriesService) {}

    resolve(): Promise<any> {
        return this.seriesService.getListadoSeries().then(listadoSeries => {
            return listadoSeries;
        });
    }
}

// CARGA DE BASE DE DATOS - CONMEMORATIVAS PAIS
@Injectable()
export class LoadConmemorativasPaisResolver implements Resolve<any> {
    constructor(private conmemorativasPaisService: ConmemorativasPaisService) {}

    resolve(route: ActivatedRouteSnapshot): Promise<any> {
        return this.conmemorativasPaisService.getListadoMonedasPaises(route.params.codigo).then(listadoConmemorativasPais => {
            return listadoConmemorativasPais;
        });
    }
}

// CARGA DE BASE DE DATOS - CONMEMORATIVAS ANOS
@Injectable()
export class LoadConmemorativasAnosResolver implements Resolve<any> {
    constructor(private conmemorativasAnosService: ConmemorativasAnosService) {}

    resolve(route: ActivatedRouteSnapshot): Promise<any> {
        return this.conmemorativasAnosService.getListadoMonedasAnos(route.params.ano).then(listadoConmemorativasAnos => {
            return listadoConmemorativasAnos;
        });
    }
}

export const CatalogoRoutes: Routes = [
    {
        path: '',
        component: CatalogoComponent,
        children: [
            {path: '', redirectTo: '/app/catalogo/conmemorativas/pais', pathMatch: 'full'},
            {
                path: 'conmemorativas',
                canActivate: [CanActivateAuthGuard],
                children: [
                    {path: '', redirectTo: '/app/catalogo/conmemorativas/pais', pathMatch: 'full'},
                    {
                        path: 'pais',
                        component: ConmemorativasPaisComponent,
                        canActivate: [CanActivateAuthGuard],
                    },
                    {
                        path: 'pais/:codigo',
                        component: DetalleConmemorativasPaisComponent,
                        canActivate: [CanActivateAuthGuard],
                        resolve: {
                            listadoMonedasPaises: LoadConmemorativasPaisResolver
                        }
                    },
                    {
                        path: 'ano',
                        component: ConmemorativasAnoComponent,
                        canActivate: [CanActivateAuthGuard]
                    },
                    {
                        path: 'ano/:ano',
                        component: DetalleConmemorativasAnoComponent,
                        canActivate: [CanActivateAuthGuard],
                        resolve: {
                            listadoMonedasAnos: LoadConmemorativasAnosResolver
                        }
                    }
                ]
            }/*,
            {
                path: 'series',
                component: CatalogoSeriesComponent,
                canActivate: [CanActivateAuthGuard],
                resolve: {
                    listadoSeries: LoadSeriesResolver
                }
            }*/
        ]
    }
];

export const CatalogoRoutingModule = RouterModule.forChild(CatalogoRoutes);
