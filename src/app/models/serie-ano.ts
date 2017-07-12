import {Moneda} from "app/models/moneda";
import {Serie} from "app/models/serie";

export class SerieAno {
    id: number;
    //serie: Serie;
    ano: number;
    m1c: Moneda;
    m2c: Moneda;
    m5c: Moneda;
    m10c: Moneda;
    m20c: Moneda;
    m50c: Moneda;
    m1e: Moneda;
    m2e: Moneda;
}