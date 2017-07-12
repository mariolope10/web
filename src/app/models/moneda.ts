import {Pais} from "app/models/pais";
import {Ceca} from "app/models/ceca";
import {Valor} from "app/models/valor";
import {Tipo} from "app/models/tipo";
import {Tematica} from "app/models/tematica";

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
    tirada_unc: number;
    tirada_bu: number;
    tirada_proof: number;
}
