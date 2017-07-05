import {Injectable} from '@angular/core';
import {JwtHttp} from 'angular2-jwt-refresh';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {environment} from "environments/environment";
import {Moneda} from "app/models/moneda";

@Injectable()
export class ConmemorativasPaisService {
    
    constructor(private jwtHttp: JwtHttp) {}

    getListadoMonedasPaises(codigo: string): Promise<Moneda[]> {
        const url = environment.apiEndpoint + "moneda/conmemorativa/pais/" + codigo;

        return this.jwtHttp
            .get(url)
            .map(response => response.json())
            .toPromise();
    }
}