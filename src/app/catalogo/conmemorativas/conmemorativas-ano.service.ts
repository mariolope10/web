import {Injectable} from '@angular/core';
import {JwtHttp} from 'angular2-jwt-refresh';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {environment} from "environments/environment";
import {Observable} from "rxjs/Rx";
import {Moneda} from "app/models/moneda";

@Injectable()
export class ConmemorativasAnosService {
    
    constructor(private jwtHttp: JwtHttp) {}
    
    getListadoMonedasAnos(): Observable<Array<{ano: number, monedas: Moneda[]}>> {
        const url = environment.apiEndpoint + "moneda/conmemorativas?orden=ano";

        return this.jwtHttp
            .get(url)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().message || 'Server error'));
    }
}