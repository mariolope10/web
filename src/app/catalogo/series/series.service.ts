import {Injectable} from '@angular/core';
import {JwtHttp} from 'angular2-jwt-refresh';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {environment} from "environments/environment";
import {Observable} from "rxjs/Rx";
import {Serie} from "app/models/serie";

@Injectable()
export class SeriesService {
    
    constructor(private jwtHttp: JwtHttp) {}

    getListadoSeries(): Observable<Array<{pais: string, series: Serie[]}>> {
        const url = environment.apiEndpoint + "series";

        return this.jwtHttp
            .get(url)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().message || 'Server error'));
    }
}