import {Injectable} from '@angular/core';
import {JwtHttp} from 'angular2-jwt-refresh';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {environment} from "environments/environment";
import {Serie} from "app/models/serie";

@Injectable()
export class SeriesService {
    
    constructor(private jwtHttp: JwtHttp) {}

    getListadoSeries(codigo: string): Promise<Serie[]> {
        const url = environment.apiEndpoint + "series/" + codigo;

        return this.jwtHttp
            .get(url)
            .map(response => response.json())
            .toPromise();
    }
}