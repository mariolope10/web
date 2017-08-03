import {Pais} from "./pais";
import {SerieAno} from "./serie-ano";

export class Serie {
    id: number;
    pais: Pais;
    monedas_ano: SerieAno[]
    fecha_desde: string;
    fecha_hasta: string;
}
