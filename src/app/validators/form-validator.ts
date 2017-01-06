import { FormControl, AbstractControl, FormGroup } from "@angular/forms";
import { Injector, ReflectiveInjector, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

// import { LoginService } from '../services/login.service';


@Injectable()
export class FormValidators {

    constructor(private http: Http) { }

    // checkUsername = (control: FormControl) => {
    //     let username = control.valueChanges;
    //     const headers = new Headers({ 'Content-Type': 'application/json' })
    //     let debounce: any = 500;

    //     return new Observable((obs: any) => {
    //         username
    //             .debounceTime(debounce)
    //             .distinctUntilChanged()
    //             .flatMap(value => this.http.post(environment.API_URL + 'user/compare', JSON.stringify({ value: value }), { headers }))
    //             .subscribe(
    //             data => {
    //                 obs.next(null);
    //                 obs.complete();
    //             },
    //             error => {
    //                 let state = error.json().state;
    //                 let reason = 'usernameTaken';
    //                 obs.next({ [reason]: !state });
    //                 obs.complete();
    //             }
    //             )
    //     });
    // }

    matchPasswords = (group: FormGroup) => {
        let password = group.controls['password'];
        let confirm = group.controls['confirmPassword'];

        if( password.pristine || confirm.pristine) {
            return null
        }

        if(password.value !== confirm.value) {
            return {['isInValid'] : true}
        }

        return null;
        
    }
}