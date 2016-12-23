import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-info-card',
    templateUrl: './info-card.component.html',
    styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
    @Input() name = 'test';
    @Input() number = 11;
    constructor() { }

    ngOnInit() {
    }

}
