import {Tirada} from "app/models/tirada";
import {MonedaSerie} from "app/models/moneda-serie";

export class Serie {
  id: number;
  orden: number;
  pais: string;
  fechaEmisionDesde: string;
  fechaEmisionHasta: string;
  moneda1c: MonedaSerie;
  moneda2c: MonedaSerie;
  moneda5c: MonedaSerie;
  moneda10c: MonedaSerie;
  moneda20c: MonedaSerie;
  moneda50c: MonedaSerie;
  moneda1e: MonedaSerie;
  moneda2e: MonedaSerie;
  tiradas: Tirada[]
}
