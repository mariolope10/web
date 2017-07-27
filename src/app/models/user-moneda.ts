export class UserMoneda {

    constructor(moneda: number) {
        this.id = null;
        this.user = null;
        this.moneda = moneda;
        this.circ_coleccion = 0;
        this.circ_intercambio = 0;
        this.sc_coleccion = 0;
        this.sc_intercambio = 0;
        this.bu_coleccion = 0;
        this.bu_intercambio = 0;
        this.proof_coleccion = 0;
        this.proof_intercambio = 0;
    }

    id: number;
    user: number;
    moneda: number;
    circ_coleccion: number;
    circ_intercambio: number;
    sc_coleccion: number;
    sc_intercambio: number;
    bu_coleccion: number;
    bu_intercambio: number;
    proof_coleccion: number;
    proof_intercambio: number;
}