import {NgModule, LOCALE_ID} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

import {CatalogoRoutingModule, LoadConmemorativasPaisResolver, LoadConmemorativasAnosResolver} from './catalogo-routing.module';
import {CatalogoComponent} from './catalogo.component';

import {DialogoDetalleComponent} from "./series/dialogo-detalle.component";
import {SmdFabSpeedDialComponent, SmdFabSpeedDialTrigger, SmdFabSpeedDialActions} from "./../fab-speed-dial/fab-speed-dial";

import {OrderByPipe} from "app/pipes/orderby.pipe";
import {KeysPipe} from "app/pipes/key.pipe";
import {ConmemorativasPaisComponent} from "app/catalogo/conmemorativas/pais/conmemorativas-pais.component";
import {ConmemorativasAnoComponent} from "app/catalogo/conmemorativas/ano/conmemorativas-ano.component";
import {DetalleConmemorativasAnoComponent} from "app/catalogo/conmemorativas/ano/detalle/detalle-conmemorativas-ano.component";
import {DetalleConmemorativasPaisComponent} from "app/catalogo/conmemorativas/pais/detalle/detalle-conmemorativas-pais.component";
import {ConmemorativasPaisService} from "app/catalogo/conmemorativas/pais/conmemorativas-pais.service";
import {ConmemorativasAnosService} from "app/catalogo/conmemorativas/ano/conmemorativas-ano.service";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        CatalogoRoutingModule
    ],
    declarations: [
        ConmemorativasAnoComponent,
        ConmemorativasPaisComponent,
        DetalleConmemorativasAnoComponent,
        DetalleConmemorativasPaisComponent,
        CatalogoComponent,
        DialogoDetalleComponent,
        SmdFabSpeedDialComponent,
        SmdFabSpeedDialTrigger,
        SmdFabSpeedDialActions,
        KeysPipe,
        OrderByPipe
    ],
    entryComponents: [
        DialogoDetalleComponent,
        SmdFabSpeedDialComponent,
        DetalleConmemorativasAnoComponent,
        DetalleConmemorativasPaisComponent,
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
        LoadConmemorativasPaisResolver,
        LoadConmemorativasAnosResolver,
        ConmemorativasPaisService,
        ConmemorativasAnosService
    ]
})

export class CatalogoModule {}
