import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FreteModel } from './frete.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class FreteService {
    private _Url = 'http://127.0.0.1:8887/frete.json';

    constructor(private _http: Http) { }
    
    getFrete(cep: string): Observable<FreteModel> {
        return this._http.get(this._Url)
            .map((response: Response) => <FreteModel>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}