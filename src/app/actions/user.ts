import { Action } from '@ngrx/store';
import { type } from '../util';
import { User } from '../models/user';


export const ActionTypes = {
    ADD_INIT: type('[User] Add Initialize '),
    ADD_SUCCESS: type('[User] Add Success'),
    ADD_FAILURE: type('[User] Add Failure'),
    ADD_USER_INFO_FROM_LINK: type('[User] Add User Info From Link'),
    ADD_USER_PASSWORD_INIT: type('[User] Add User Password Init'),
    ADD_USER_PASSWORD_SUCCESS: type('[User] Add User Password Success'),
    ADD_USER_PASSWORD_FAILURE: type('[User] Add User Password Failure')
}

export class AddInit implements Action {
    type = ActionTypes.ADD_INIT;

    constructor(public payload?: any) { }
}

export class AddSuccess implements Action {
    type = ActionTypes.ADD_SUCCESS;

    constructor(public payload?: any) { }
}

export class AddFailure implements Action {
    type = ActionTypes.ADD_FAILURE;

    constructor(public payload?: any) { }
}


export class addUserInfoFromLink implements Action {
    type = ActionTypes.ADD_USER_INFO_FROM_LINK;

    constructor(public payload?: any) { }
}

export class addUserPasswordInit implements Action {
    type = ActionTypes.ADD_USER_PASSWORD_INIT;

    constructor(public payload?: any) { }
}

export class addUserPasswordSuccess implements Action {
    type = ActionTypes.ADD_USER_PASSWORD_SUCCESS;

    constructor(public payload?: any) { }
}

export class addUserPasswordFailure implements Action {
    type = ActionTypes.ADD_USER_PASSWORD_FAILURE;

    constructor(public payload?: any) { }
}





export type Actions
    = AddInit
    | AddSuccess
    | addUserInfoFromLink
    | AddFailure
    | addUserPasswordInit
    | addUserPasswordSuccess
    | addUserPasswordFailure