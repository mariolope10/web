import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {JwtHttp} from "angular2-jwt-refresh/dist/angular2-jwt-refresh";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthenticationService {
    private headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Cache-Control': 'no-cache'
    });

    constructor(private http: Http, private jwtHttp: JwtHttp, private router: Router) {}

    login(username: string, password: string): Observable<boolean> {
        const url = environment.apiEndpoint + "auth/login";
        
        return this.http.post(url, JSON.stringify({username: username, password: password}), {headers: this.headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                let refreshToken = response.json() && response.json().refreshToken;
                
                if (token && refreshToken) {
                    // store jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('token', token);
                    localStorage.setItem('refreshToken', refreshToken);

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            })
            .catch((error: any) => Observable.throw(error.json().message || 'Server error'));
    }

    getToken(): String {
        var token = localStorage.getItem('token');
        return token ? token : "";
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        
        this.router.navigate(['portada/login']);
    }

    isLoggedIn(): boolean {
        var token: String = this.getToken();
        return token && token.length > 0;
    }
    
    getMe(): Observable<boolean> {
        const url = environment.apiEndpoint + "user/me";

        return this.jwtHttp
            .get(url)
            .map((response: Response) => {
                let username = response.json() && response.json().username;
                
                if (username) {
                    return true;
                } else {
                    return false;
                }
            })
            .catch((error: any) => Observable.throw(error.json().message || 'Server error'));
    }
}