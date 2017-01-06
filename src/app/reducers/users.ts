import * as userActions from '../actions/user';


export interface State {
    email?: String;
    token?: String;
    userId?: String;
    validated?: Boolean;
}

const initialState:State = {
    
}

export function reducer(state = initialState, action: userActions.Actions){
    switch(action.type){
        
        case userActions.ActionTypes.ADD_SUCCESS: {
            return state
        }
        
        case userActions.ActionTypes.ADD_USER_INFO_FROM_LINK: {
            const { token, userId } = action.payload;

            return Object.assign({}, state, {
                token,
                userId
            })
        }

        case userActions.ActionTypes.ADD_USER_PASSWORD_SUCCESS: {
            const { email, validated } = action.payload;

            return Object.assign({}, state, {
                email, validated
            })
        }

        case userActions.ActionTypes.ADD_USER_PASSWORD_FAILURE:
        case userActions.ActionTypes.ADD_FAILURE:
        default: 
            return state
    }
}

export const getUserId = (state: State) => state.userId;
export const getToken = (state: State) => state.token;
export const getEmail = (state: State) => state.email;
export const getValidated = (state: State) => state.validated;