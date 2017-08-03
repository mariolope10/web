import {Injectable} from '@angular/core';
import {JwtHttp} from 'angular2-jwt-refresh';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {environment} from "../../../environments/environment";
import {Moneda} from "../../models/moneda";
import {UserMoneda} from "../../models/user-moneda";

@Injectable()
export class ConmemorativasService {
    
    constructor(private jwtHttp: JwtHttp) {}

    getListadoMonedasPaises(codigo: string): Promise<Array<Moneda>> {
        const url = environment.apiEndpoint + "user/monedas/conmemorativa/pais/" + codigo;

        return this.jwtHttp
            .get(url)
            .map(response => response.json())
            .toPromise();
    }
    
    getListadoMonedasAnos(ano: number): Promise<Array<Moneda>> {
        const url = environment.apiEndpoint + "user/monedas/conmemorativa/ano/" + ano;

        return this.jwtHttp
            .get(url)
            .map(response => response.json())
            .toPromise();
    }
    
    addUserMoneda(userMoneda: UserMoneda): Promise<UserMoneda> {
        const url = environment.apiEndpoint + "user/moneda";

        return this.jwtHttp
            .post(url, userMoneda)
            .map(response => response.json())
            .toPromise();
    }
    
    updateUserMoneda(userMoneda: UserMoneda): Promise<UserMoneda> {
        const url = environment.apiEndpoint + "user/moneda";

        return this.jwtHttp
            .put(url, userMoneda)
            .map(response => response.json())
            .toPromise();
    }
    
    deleteUserMoneda(id: number) {
        const url = environment.apiEndpoint + "user/moneda/" + id;

        return this.jwtHttp
            .delete(url)
            .map(response => response.json())
            .toPromise();
    }
}