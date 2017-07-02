import {Tirada} from "app/models/tirada";
import {Moneda} from "app/models/moneda";

export class Serie {
  id: number;
  orden: number;
  pais: string;
  fecha_desde: string;
  fecha_hasta: string;
  monedas: Moneda[];
  tiradas: Tirada[]
}
