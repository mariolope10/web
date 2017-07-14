import {NgModule, LOCALE_ID} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

import {CatalogoRoutingModule, ConmemorativasPaisResolver, ConmemorativasAnosResolver, SeriesResolver} from './catalogo-routing.module';
import {CatalogoComponent} from './catalogo.component';

import {SmdFabSpeedDialComponent, SmdFabSpeedDialTrigger, SmdFabSpeedDialActions} from "./../fab-speed-dial/fab-speed-dial";

import {OrderByPipe} from "app/pipes/orderby.pipe";
import {KeysPipe} from "app/pipes/key.pipe";
import {ConmemorativasService} from "app/catalogo/conmemorativas/conmemorativas.service";
import {ListadoConmemorativasComponent} from "app/catalogo/conmemorativas/listado/listado-conmemorativas.component";
import {DialogoDetalleConmemorativasComponent} from "app/catalogo/conmemorativas/listado/dialogo/dialogo-detalle-conmemorativas.component";
import {FiltroPaisConmemorativasComponent} from "app/catalogo/conmemorativas/filtro-pais/filtro-pais-conmemorativas.component";
import {FiltroAnoConmemorativasComponent} from "app/catalogo/conmemorativas/filtro-ano/filtro-ano-conmemorativas.component";
import {FiltroPaisSeriesComponent} from "app/catalogo/series/filtro-pais/filtro-pais-series.component";
import {ListadoSeriesComponent} from "app/catalogo/series/listado/listado-series.component";
import {SeriesService} from "app/catalogo/series/series.service";
import {DialogoDetalleSeriesComponent} from "app/catalogo/series/listado/dialogo/dialogo-detalle-series.component";
import {DialogoColeccionComponent} from "app/catalogo/dialogo/dialogo-coleccion.component";

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
