import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';

import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { ActionReducer, combineReducers } from '@ngrx/store';

import { RouterState, routerReducer } from '@ngrx/router-store';

import { compose } from '@ngrx/core/src/compose';
import { createSelector } from 'reselect';

import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment'

import { Message } from 'primeng/primeng';

import * as fromUser from './users';

export interface State {
    user: fromUser.State;
}
const reducers = {
    user: fromUser.reducer
};

const developmentReducer = compose(storeFreeze, combineReducers)(reducers)
const productionReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
};



// user State Slice ;

export const getUserState = (state:State) => state.user;

export const getUserId = createSelector(getUserState, fromUser.getUserId);
export const getToken = createSelector(getUserState, fromUser.getToken); 
export const getEmail = createSelector(getUserState, fromUser.getEmail); 
export const getValidated = createSelector(getUserState, fromUser.getValidated); 

