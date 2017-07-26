import {Component, AfterViewInit} from '@angular/core';
import {MdDialogRef, MdSnackBar} from "@angular/material";

import {ConmemorativasService} from "app/catalogo/conmemorativas/conmemorativas.service";
import {UserMoneda} from "app/models/user-moneda";
import {Moneda} from "app/models/moneda";

@Component({
    selector: 'dialogo-detalle',
    styles: [`
        .col-descripcion {
            white-space: nowrap;
        }
    `
    ],
    templateUrl: './dialogo-coleccion.component.html'
})
export class DialogoColeccionComponent implements AfterViewInit {
    moneda: Moneda;

    isDataAvailable: boolean = false;

    userMoneda: UserMoneda;

    disabled: boolean;

    constructor(public snackBar: MdSnackBar, private conmemorativasService: ConmemorativasService, public dialogRef: MdDialogRef<DialogoColeccionComponent>) {}

    ngAfterViewInit() {}

    ngOnInit() {
        this.conmemorativasService.getTotalesMonedaEnCatalogoByUser(this.moneda.id).then(
            userMoneda => {
                this.userMoneda = userMoneda
                this.isDataAvailable = true
            },
            /*(error: any) => {
                // NO POSEE EL USUARIO LA MONEDA
                if (error.status == 404) {
                    this.totalesMoneda = null
                    this.isDataAvailable = true
                }
            }*/
        )
    }

    saveUserMoneda(userMoneda) {
        this.disabled = true
        
        if (userMoneda.id) {
            // UPDATE
            this.conmemorativasService.updateUserMoneda(this.userMoneda).then(
                userMoneda => {
                    this.disabled = false
                    this.dialogRef.close("save")
                    this.openSnackBar("Guardado correctamente")
                },
                (error: any) => {
                    this.disabled = false
                    console.log(error)
                    this.openSnackBar("Se ha producido un error")
                }
            )

        } else {
            // INSERT
            this.conmemorativasService.addUserMoneda(this.userMoneda).then(
                userMoneda => {
                    this.disabled = false
                    this.dialogRef.close("save")
                    this.openSnackBar("Guardado correctamente")
                },
                (error: any) => {
                    this.disabled = false
                    console.log(error)
                    this.openSnackBar("Se ha producido un error")
                }
            )
        }
    }

    openSnackBar(message: string) {
        this.snackBar.open(message, "CERRAR", {
            duration: 2000
        });
    }
}
