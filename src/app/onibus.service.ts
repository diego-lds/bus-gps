import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';






@Injectable()
export class OnibusService {
    private _Url = 'http://dadosabertos.rio.rj.gov.br/apiTransporte/apresentacao/rest/index.cfm';


    constructor(private _http: Http) { }

    getData(): Observable<any> {
        return this._http.get(this._Url + '/onibus').map((response: Response) => response.json());
    }
     getVeiculosByLinha(id: String): Observable<any> {
         return this._http.get(this._Url + '/onibus/' + id)
             .map((response: Response) => response.json())
     }
     getCoordenadasVeiculo(idOrdem: String): Observable<any> {
         return this._http.get(this._Url + '/onibus/' + idOrdem)
             .map((response: Response) => response.json())
     }


     private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}