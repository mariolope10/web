import {NgModule, LOCALE_ID} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

import {CatalogoRoutingModule, ConmemorativasPaisResolver, ConmemorativasAnosResolver, SeriesResolver} from './catalogo-routing.module';
import {CatalogoComponent} from './catalogo.component';

import {SmdFabSpeedDialComponent, SmdFabSpeedDialTrigger, SmdFabSpeedDialActions} from "./../fab-speed-dial/fab-speed-dial";
import {FiltroAnoConmemorativasComponent} from "./conmemorativas/filtro-ano/filtro-ano-conmemorativas.component";
import {FiltroPaisConmemorativasComponent} from "./conmemorativas/filtro-pais/filtro-pais-conmemorativas.component";
import {FiltroPaisSeriesComponent} from "./series/filtro-pais/filtro-pais-series.component";
import {ListadoConmemorativasComponent} from "./conmemorativas/listado/listado-conmemorativas.component";
import {DialogoDetalleSeriesComponent} from "./series/listado/dialogo/dialogo-detalle-series.component";
import {DialogoColeccionComponent} from "./dialogo/dialogo-coleccion.component";
import {DialogoDetalleConmemorativasComponent} from "./conmemorativas/listado/dialogo/dialogo-detalle-conmemorativas.component";
import {ListadoSeriesComponent} from "./series/listado/listado-series.component";
import {DialogoTiradaComponent} from "./series/listado/dialogo/dialogo-tirada.component";
import {KeysPipe} from "../pipes/key.pipe";
import {OrderByPipe} from "../pipes/orderby.pipe";
import {ConmemorativasService} from "./conmemorativas/conmemorativas.service";
import {SeriesService} from "./series/series.service";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        CatalogoRoutingModule
    ],
    declarations: [
        CatalogoComponent,
        FiltroAnoConmemorativasComponent,
        FiltroPaisConmemorativasComponent,
        FiltroPaisSeriesComponent,
        ListadoConmemorativasComponent,
        ListadoSeriesComponent,
        DialogoDetalleSeriesComponent,
        DialogoDetalleConmemorativasComponent,
        DialogoColeccionComponent,
        DialogoTiradaComponent,
        SmdFabSpeedDialComponent,
        SmdFabSpeedDialTrigger,
        SmdFabSpeedDialActions,
        KeysPipe,
        OrderByPipe
    ],
    entryComponents: [
        DialogoDetalleSeriesComponent,
        DialogoDetalleConmemorativasComponent,
        DialogoColeccionComponent,
        DialogoTiradaComponent,
        ListadoConmemorativasComponent,
        ListadoSeriesComponent,
        SmdFabSpeedDialComponent,
        SmdFabSpeedDialTrigger,
        SmdFabSpeedDialActions,
        FiltroAnoConmemorativasComponent,
        FiltroPaisConmemorativasComponent,
        FiltroPaisSeriesComponent
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: "es-ES"
        },
        ConmemorativasPaisResolver,
        ConmemorativasAnosResolver,
        ConmemorativasService,
        SeriesResolver,
        SeriesService
    ]
})

export class CatalogoModule {}
