import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
    selector: 'app-side-panel',
    templateUrl: './side-panel.component.html',
    styleUrls: ['./side-panel.component.scss'],
    animations: [
        trigger('subMenuState', [
            state('show', style({ height: '*', transform: 'translateY(0)', visibility: 'visible', opacity: 1, zIndex: -99, backgroundColor: '#388E3C' })),
            state('hide', style({ height: '0', opacity: 0, transform: 'translateY(-100%)', visibility: 'hidden', zIndex: -99, backgroundColor: 'inherit' })),
            transition('* => *', animate('0.5s 0.1s cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class SidePanelComponent implements OnInit {
    
    showAccordion:string = 'hide'
    constructor() { }

    ngOnInit() {
    }

    toggle = (idx) => {
        
        let value = this.menusFormat[idx].subMenuOpen;
        if(value){
            this.menusFormat[idx].subMenuOpen = false;
            this.showAccordion = 'hide';
        } else {
            this.menusFormat[idx].subMenuOpen = true;
            this.showAccordion = 'show';
        }
    
    }

    menusFormat = [
        {
            name: 'Home',
            icon: 'fa-home',
            subMenu: false,
            link: '/client/home',
            subAnimation: false,
            subMenuOpen: false,
            subMenuOptions: []
        },
        {
            name: 'Menu',
            icon: 'fa-cutlery',
            subMenu: true,
            link: '#',
            subAnimation: false,
            subMenuOpen: false,
            subMenuOptions: [
                {
                    name: 'Show Menu',
                    link: '/client/menus'
                },
                {
                    name: 'Create Menu',
                    link: '/client/menu/new'
                },
                {
                    name: 'Category',
                    link: '/client/category'
                }
            ]
        },
        {
            name: 'Profile',
            icon: 'fa-user',
            subMenu: false,
            subMenuOpen: false,
            subAnimation: false,
            link: '/client/profile',
            subMenuOptions: []
        }
    ]


}
