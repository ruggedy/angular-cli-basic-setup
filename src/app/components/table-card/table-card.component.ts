import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MenuData } from '../../models/menu-form';
@Component({
    selector: 'app-table-card',
    templateUrl: './table-card.component.html',
    styleUrls: ['./table-card.component.scss']
})
export class TableCardComponent implements OnInit {
    @Input()menu: MenuData[];
    @Input()title: String;

    pageNumber: number = 1
    firstEntry: number = 0;
    lastEntry: number = 0;
    constructor() { }

    pageChanged = (event) => {
        this.pageNumber = event;
        this.firstEntry = (this.pageNumber-1)*10+1;
        switch(true){
            case this.menu.length > this.pageNumber*10: {
                this.lastEntry = this.pageNumber*10;
                break;
            }
            case this.menu.length <= this.pageNumber*10: {
                this.lastEntry = this.menu.length;
                break;
            }
            default:
                break;
        }
    } 

    ngOnInit() {
        if(this.menu.length > 0 ) {
            this.firstEntry = 1;
            if(this.menu.length >= 10) {
                this.lastEntry = 10;
            } else {
                this.lastEntry = this.menu.length;
            }
        }
    }

}
