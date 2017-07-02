import {Injectable} from '@angular/core';
import {ResponseContentType} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/Subscriber';
import {JwtHttp} from "angular2-jwt-refresh/dist/angular2-jwt-refresh";
import {environment} from "environments/environment";

@Injectable()
export class UrlHelperService {
    constructor(private jwtHttp: JwtHttp) {}

    get(path: string): Observable<any> {
        return new Observable((observer: Subscriber<any>) => {
            let objectUrl: string = null;
            
            const url = environment.apiEndpoint + path;

            this.jwtHttp
                .get(url, {
                    responseType: ResponseContentType.Blob
                })
                .subscribe(m => {
                    objectUrl = URL.createObjectURL(m.blob());
                    observer.next(objectUrl);
                });

            return () => {
                if (objectUrl) {
                    URL.revokeObjectURL(objectUrl);
                    objectUrl = null;
                }
            };
        });
    }
}