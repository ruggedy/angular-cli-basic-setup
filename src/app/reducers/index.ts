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

import * as fromToggleNav from './toggle-nav';
import * as fromCategory from './category';
import * as fromLogin from './login';
import * as fromRestaurant from './restaurant';
import * as fromMenu from './menu';
import * as fromLoad from './load-data';
import * as fromMessage from './messages';

// importing models 
import * as __restaurant from '../models/restaurant-form';
import * as __menuCat from '../models/menu-category';
import * as __menuForm from '../models/menu-form';
import { Message } from 'primeng/primeng'

export interface State {
    toggleNav: fromToggleNav.State,
    category: fromCategory.State,
    login: fromLogin.State,
    restaurant: fromRestaurant.State
    menu: fromMenu.State,
    router: RouterState,
    load: fromLoad.State,
    messages: fromMessage.State
}
const reducers = {
    toggleNav: fromToggleNav.reducer,
    category: fromCategory.reducer,
    login: fromLogin.reducer,
    restaurant: fromRestaurant.reducer,
    menu: fromMenu.reducer,
    router: routerReducer,
    load: fromLoad.reducer,
    messages: fromMessage.reducer

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

export const getNavState = (state$: Observable<State>) => {
    return state$.select(state => state.toggleNav.navState)
}

//  User State
export const getLoginState = (state: State) => state.login

export const getUser = createSelector(getLoginState, fromLogin.getUser);
export const getIsLoggedIn = createSelector(getLoginState, fromLogin.getIsLoggedIn);
export const getId = createSelector( getLoginState, fromLogin.getId);
export const getToken = createSelector(getLoginState, fromLogin.getToken);



// category state

export const getCategoryState = (state: State) => state.category;
export const getCategories = createSelector(getCategoryState, fromCategory.getCategories);
export const getCategoriesIds = createSelector(getCategoryState, fromCategory.getIds);
export const getCategoriesCount = createSelector(getCategoryState, fromCategory.getCount);


// restaurant state 

export const getRestaurantState = (state: State) => state.restaurant;

export const getRestaurantId = createSelector(getRestaurantState, fromRestaurant.getId);
export const getRestaurantName = createSelector(getRestaurantState, fromRestaurant.getName);
export const getRestaurantOpening = createSelector(getRestaurantState, fromRestaurant.getOpening);
export const getRestaurantLocations = createSelector(getRestaurantState, fromRestaurant.getLocations);
export const getPicture = createSelector(getRestaurantState, fromRestaurant.getPicture);

export const getRestaurant = createSelector(getRestaurantState, fromRestaurant.getRestaurant);


// menu State

export const getMenuState = (state: State) => state.menu

export const getMenuCount = createSelector(getMenuState, fromMenu.getCount);
export const getMenus = createSelector(getMenuState, fromMenu.getMenu)
export const getFilteredIds = createSelector(getMenuState, fromMenu.getFilteredIds);
export const getSelectedId = createSelector(getMenuState, fromMenu.getSelectedId);

export const getFilteredMenus = createSelector(getMenus, getFilteredIds, (menus, ids) => {
    return menus.filter(menu => ids.indexOf(menu._id) >= 0)

})

export const getSelectedMenu = createSelector(getMenus, getSelectedId, (menus, id) => {
    return menus.find(menu => menu._id === id);
})

export const getAllergysCount = createSelector(getMenus, (menu) => {
    const initialValue = menu.map(value => value.allergens)
    return [].concat(...initialValue)
        .filter((value, index, array) => array.indexOf(value) === index)
        .length
})

export const getOptionsCount = createSelector(getMenus, (menu) => {
    const initialValue = menu.map(value => value.options)

    const flatValue = [].concat(...initialValue);
    const options = {
        regular: 0,
        vegetarian: 0,
        vegan: 0
    }

    flatValue.forEach(value => {
        switch (value) {
            case 'Regular':
                options.regular++;
                break;
            case 'Vegetarian':
                options.vegetarian++;
                break;
            case 'Vegan':
                options.vegan++;
                break;
            default:
                break;
        }
    })

    return options;
})

// From loaded

export const loadState = (state: State) => state.load;

export const getIsLoading = createSelector(loadState, fromLoad.isLoading);
export const getLoaded = createSelector(loadState, fromLoad.loaded);



export const getCategoriesFull = createSelector(getCategories, getMenus, (categories, menus) => {
    const fullCategories = categories.map(category => {
        const fullMenus = menus.filter(menu => category.menus.indexOf(menu._id) >= 0);

        return Object.assign({}, category, { menus: fullMenus })
    })

    console.log(fullCategories);

    return fullCategories;
})

// from Messages

export const messagesState = (state: State) => state.messages;

export const getMessages = createSelector(messagesState, fromMessage.getMessages);