import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/concatMap';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { go } from '@ngrx/router-store';

import { Message } from 'primeng/primeng';

import { AuthService } from '../services/auth.service';
import * as userAction from '../actions/user';


@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService) { }

    @Effect()
    add$: Observable<Action> = this.actions$
        .ofType(userAction.ActionTypes.ADD_INIT)
        .map(action => action.payload)
        .switchMap(payload => {

            if (payload === undefined || '' || null) {
                return empty();
            }
            
            return this.authService.createUser(payload)
                .map(res => new userAction.AddSuccess(res))
                .catch(err => of(new userAction.AddFailure()))
            
        })

    @Effect()
    addPassword$: Observable<Action> = this.actions$
        .ofType(userAction.ActionTypes.ADD_USER_PASSWORD_INIT)
        .map(action => action.payload)
        .switchMap( payload => {
            if (payload === undefined || '' || null) {
                return empty();
            }

            return this.authService.createPassword(payload)
                .concatMap(res => {

                    const { email, validated } = res;

                    const payload = { email, validated };
                    return Observable.from([
                        new userAction.addUserPasswordSuccess(payload),
                        go('/client/test')
                    ])
                })
                .catch(err => of(new userAction.addUserPasswordFailure()))
        })
}




