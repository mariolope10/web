import {Component} from '@angular/core';
import {MdDialogRef, MdSnackBar} from "@angular/material";

import {ConmemorativasService} from "app/catalogo/conmemorativas/conmemorativas.service";
import {UserMoneda} from "app/models/user-moneda";
import {Moneda} from "app/models/moneda";

@Component({
    selector: 'dialogo-coleccion',
    styles: [`
        .col-descripcion {
            white-space: nowrap;
        }
    `
    ],
    templateUrl: './dialogo-coleccion.component.html'
})
export class DialogoColeccionComponent {
    moneda: Moneda;
    user_moneda: UserMoneda;

    disabled: boolean;

    constructor(public snackBar: MdSnackBar, private conmemorativasService: ConmemorativasService, public dialogRef: MdDialogRef<DialogoColeccionComponent>) {}

    ngOnInit() {
        this.user_moneda = this.moneda.user_monedas[0];

        if (this.user_moneda == null) {
            this.user_moneda = new UserMoneda(this.moneda.id);
        }
    }

    openSnackBar(message: string) {
        this.snackBar.open(message, "CERRAR", {
            duration: 2000
        });
    }

    addUserMoneda(user_moneda: UserMoneda) {
        this.disabled = true

        if (!user_moneda.id) {
            this.conmemorativasService.addUserMoneda(user_moneda).then(
                () => {
                    this.disabled = false
                    this.dialogRef.close("save")
                    this.openSnackBar("Guardado correctamente")
                },
                () => {
                    this.disabled = false
                    //console.log(error)
                    this.openSnackBar("Se ha producido un error")
                }
            )
        }
    }

    updateUserMoneda(user_moneda: UserMoneda) {
        if (this.checkMustDelete(user_moneda)) {
            // VACIO - BORRAMOS
            this.deleteUserMoneda(user_moneda.id)
            return;
        }

        this.disabled = true

        if (user_moneda.id) {
            this.conmemorativasService.updateUserMoneda(user_moneda).then(
                () => {
                    this.disabled = false
                    this.dialogRef.close("save")
                    this.openSnackBar("Guardado correctamente")
                },
                () => {
                    this.disabled = false
                    this.openSnackBar("Se ha producido un error")
                }
            )
        }
    }

    deleteUserMoneda(id: number) {
        this.disabled = true

        this.conmemorativasService.deleteUserMoneda(id).then(
            () => {
                this.disabled = false
                this.dialogRef.close("save")
                this.openSnackBar("Guardado correctamente")
            },
            () => {
                this.disabled = false
                this.openSnackBar("Se ha producido un error")
            }
        )
    }

    checkMustDelete(userMoneda: UserMoneda): boolean {
        if (!userMoneda.circ_coleccion && !userMoneda.circ_intercambio
            && !userMoneda.sc_coleccion && !userMoneda.sc_intercambio
            && !userMoneda.bu_coleccion && !userMoneda.bu_intercambio
            && !userMoneda.proof_coleccion && !userMoneda.proof_intercambio) {

            // DEBE BORRAR
            return true;

        } else {
            // NO DEBE BORRAR
            return false;
        }
    }
}
