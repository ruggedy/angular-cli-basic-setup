import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../models/category';

@Component({
    selector: 'app-categories-component',
    templateUrl: './categories-component.component.html',
    styleUrls: ['./categories-component.component.scss']
})
export class CategoriesComponentComponent implements OnInit {
    
    @Input() category:Category;

    constructor() { }

    ngOnInit() {
    }

}
