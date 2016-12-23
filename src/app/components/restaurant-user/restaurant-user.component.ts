import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-restaurant-user',
    templateUrl: './restaurant-user.component.html',
    styleUrls: ['./restaurant-user.component.scss']
})
export class RestaurantUserComponent implements OnInit {
    
    @Input()restaurantUser;

    constructor() { }

    ngOnInit() {
    }

    get resName() {
        return this.restaurantUser.restaurantName;
    }

    get firstName() {
        return this.restaurantUser.firstName;
    }

    get lastName() {
        return this.restaurantUser.lastName;
    }

    get email() {
        return this.restaurantUser.email;
    }

    get phone() {
        return this.restaurantUser.phone;
    }

}
