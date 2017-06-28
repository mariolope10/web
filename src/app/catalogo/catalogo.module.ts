import {NgModule, LOCALE_ID} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

import {CatalogoRoutingModule, LoadMonedasConmemorativasPaisResolver, LoadMonedasConmemorativasAnosResolver} from './catalogo-routing.module';
import {CatalogoComponent} from './catalogo.component';

import {CatalogoConmemorativasComponent} from './conmemorativas/conmemorativas.component';
import {CatalogoSeriesComponent} from './series/series.component';

import {DialogoDetalleComponent} from "./series/dialogo-detalle.component";
import {SmdFabSpeedDialComponent, SmdFabSpeedDialTrigger, SmdFabSpeedDialActions} from "./../fab-speed-dial/fab-speed-dial";

import {ConmemorativasAnoComponent} from "app/catalogo/conmemorativas/conmemorativas-ano.component";
import {ConmemorativasPaisComponent} from "app/catalogo/conmemorativas/conmemorativas-pais.component";

import {OrderByPipe} from "app/pipes/orderByPipe";
import {KeysPipe} from "app/pipes/keysPipe";

import {ConmemorativasPaisService} from "app/catalogo/conmemorativas/conmemorativas-pais.service";
import {ConmemorativasAnosService} from "app/catalogo/conmemorativas/conmemorativas-ano.service";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        CatalogoRoutingModule
    ],
    declarations: [
        CatalogoComponent,
        CatalogoConmemorativasComponent,
        CatalogoSeriesComponent,
        DialogoDetalleComponent,
        SmdFabSpeedDialComponent,
        SmdFabSpeedDialTrigger,
        SmdFabSpeedDialActions,
        KeysPipe,
        OrderByPipe,
        ConmemorativasAnoComponent,
        ConmemorativasPaisComponent
    ],
    entryComponents: [
        DialogoDetalleComponent,
        SmdFabSpeedDialComponent,
        SmdFabSpeedDialTrigger,
        SmdFabSpeedDialActions,
        ConmemorativasAnoComponent,
        ConmemorativasPaisComponent
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: "es-ES"
        },
        ConmemorativasPaisService,
        ConmemorativasAnosService,
        LoadMonedasConmemorativasPaisResolver,
        LoadMonedasConmemorativasAnosResolver
    ]
})

export class CatalogoModule {}
