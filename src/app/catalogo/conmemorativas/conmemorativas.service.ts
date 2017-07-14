import {Injectable} from '@angular/core';
import {JwtHttp} from 'angular2-jwt-refresh';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {environment} from "environments/environment";
import {Moneda} from "app/models/moneda";
import {UserMoneda} from "app/models/user-moneda";

@Injectable()
export class ConmemorativasService {
    
    constructor(private jwtHttp: JwtHttp) {}

    getListadoMonedasPaises(codigo: string): Promise<Array<{moneda: Moneda, enColeccion: boolean}>> {
        const url = environment.apiEndpoint + "moneda/conmemorativa/pais/" + codigo;

        return this.jwtHttp
            .get(url)
            .map(response => response.json())
            .toPromise();
    }
    
    getListadoMonedasAnos(ano: number): Promise<Moneda[]> {
        const url = environment.apiEndpoint + "moneda/conmemorativa/ano/" + ano;

        return this.jwtHttp
            .get(url)
            .map(response => response.json())
            .toPromise();
    }
    
    getTotalesMonedaEnCatalogoByUser(id: number): Promise<UserMoneda> {
        const url = environment.apiEndpoint + "user/monedas/" + id;

        return this.jwtHttp
            .get(url)
            .map(response => response.json())
            .toPromise();
    }
}