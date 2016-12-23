import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-restaurant-locations',
    templateUrl: './restaurant-locations.component.html',
    styleUrls: ['./restaurant-locations.component.scss']
})
export class RestaurantLocationsComponent implements OnInit {
    
    @Input() location;
    constructor() { }

    ngOnInit() {
    
    }

    get address() {
        return this.location.address;
    }

    get address2() {
        return this.location.address2;
    }

    get postcode() {
        return this.location.postcode;
    }

    get city() {
        return this.location.city;
    }

    get state() {
        return this.location.state;
    }

}
