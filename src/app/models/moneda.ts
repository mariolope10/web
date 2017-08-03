import {Pais} from "./pais";
import {Ceca} from "./ceca";
import {Valor} from "./valor";
import {Tipo} from "./tipo";
import {Tematica} from "./tematica";
import {UserMoneda} from "./user-moneda";

export class Moneda {
    id: number;
    ano: number;
    fecha_emision: string;
    km: string;
    motivo: string;
    autor: string;
    imagen: string;
    comentario: string;
    pais: Pais;
    ceca: Ceca;
    valor: Valor;
    tipo: Tipo;
    tematica: Tematica;
    user_monedas: UserMoneda[];
    tirada_unc: number;
    tirada_bu: number;
    tirada_proof: number;
}
