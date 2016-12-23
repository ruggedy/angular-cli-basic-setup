import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-restaurant-opening',
    templateUrl: './restaurant-opening.component.html',
    styleUrls: ['./restaurant-opening.component.scss']
})
export class RestaurantOpeningComponent implements OnInit {
    @Input() opening;
    @Input() day;
    constructor() { }

    ngOnInit() {
    }

}
