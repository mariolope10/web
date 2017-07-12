import {Pais} from "app/models/pais";
import {SerieAno} from "app/models/serie-ano";

export class Serie {
    id: number;
    pais: Pais;
    monedas_ano: SerieAno[]
    fecha_desde: string;
    fecha_hasta: string;
}
