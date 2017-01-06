import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable()
export class AuthService {
    constructor(private http: Http) { }

    createUser = (user:User) => {
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(environment.API_URL + 'user', body, { headers })
            .map(response => response.json())
            .catch(this.handleError)
    }

    createPassword = (password) => {
        const body = JSON.stringify(password);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(environment.API_URL + 'user/password', body, { headers })
            .map(response => response.json())
            .catch(this.handleError)
    }


    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}