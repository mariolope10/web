import {Injectable} from '@angular/core';
import {JwtHttp} from 'angular2-jwt-refresh';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {environment} from "environments/environment";
import {Moneda} from "app/models/moneda";

@Injectable()
export class ConmemorativasAnosService {
    
    constructor(private jwtHttp: JwtHttp) {}
    
    getListadoMonedasAnos(ano: number): Promise<Moneda[]> {
        const url = environment.apiEndpoint + "moneda/conmemorativa/ano/" + ano;

        return this.jwtHttp
            .get(url)
            .map(response => response.json())
            .toPromise();
    }
}