import { Component, OnInit, Input, Output, EventEmitter, trigger, state, style, transition, animate } from '@angular/core';
import { MenuData } from '../../models/menu-form';
import { MenuCategory } from '../../models/menu-category';


@Component({
    selector: 'app-menu-full-card',
    templateUrl: './menu-full-card.component.html',
    styleUrls: ['./menu-full-card.component.scss'],
    animations: [
        trigger('showMore', [
            state('show', style({ height: '*', opacity: 1, zIndex: -99 })),
            state('hide', style({ height: '0', opacity: 0, zIndex: -99 })),
            transition('* => *', animate('0.5s 0.1s cubic-bezier(0.86, 0, 0.07, 1)'))
        ]),
        
    ]

})
export class MenuFullCardComponent implements OnInit {

    @Input() menuData: MenuData;
    @Input() categories: Array<MenuCategory>;
    @Input() isChecked: Array<string> = [];
    @Output() checked = new EventEmitter();
    @Output() buttonClicked = new EventEmitter();
    showMore: string = 'hide';

    constructor() { }

    get name() {
        return this.menuData.name
    }

    get options() {
        return this.menuData.options;
    }

    get allergens() {
        return this.menuData.allergens
    }

    get id() {
        return this.menuData._id;
    }

    get description() {
        return this.menuData.description;
    }

    get blacklistAllergens() {
        return this.menuData.blacklistAllergens
    }

    handleShowMore = () => {
        this.showMore = this.showMore == 'show'? 'hide' : 'show';
    }

    handleChecked = () => {
        return this.isChecked.find(value => value === this.id)
    }

    ngOnInit() {
    }

}
