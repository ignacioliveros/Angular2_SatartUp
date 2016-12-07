import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

import {IContributor} from '../aboutUs-entities/Contributor';



@Injectable()
export class AboutService {

    private  _gitApiUrl:string='https://api.github.com/repos/ignacioliveros/Angular2_StartUp/contributors';
    

   constructor(private _http: Http) { }
    
    getContributors():Observable<IContributor[]> {
        return this._http.get(this._gitApiUrl)
            .map(data => data.json())
            //.do(data => console.log("ALL" + JSON.stringify(data)))
            .catch(error => this.handleError(error));
    }

      private handleError(error: Response) {        
        return Observable.throw(error || "server error");

    }
}