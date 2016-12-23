import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Opening, Location } from '../../models/restaurant-form';

@Component({
    selector: 'app-working-hours-card',
    templateUrl: './working-hours-card.component.html',
    styleUrls: ['./working-hours-card.component.scss']
})

export class WorkingHoursCardComponent implements OnInit {
    @Input() openingData: Opening;
    @Input() locationsData: Location[];
    @Input() daysInWeek: Array<String>;

    constructor() { }

    workingHoursDetail = (day) => {
        switch(this.openingData[day].closed){
            case true:
                return 'Closed';
            case false:
                return this.openingData[day].start + ' - ' + this.openingData[day].end;

            default:
                break;
        }
    }

    ngOnInit() {

    }

}
