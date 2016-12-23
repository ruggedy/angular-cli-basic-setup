import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';

@Component({
    selector: 'app-menu-forms-menu-create',
    templateUrl: './menu-forms-menu-create.component.html',
    styleUrls: ['./menu-forms-menu-create.component.scss'],
})
export class MenuFormsMenuCreateComponent implements OnInit, OnChanges {
    
    value = "";
    @Input()category: Array<any> = [];
    @Input()inputSelectedMenu: Array<any> = [];
    @Output()newMenu = new EventEmitter();
    @Output()changeSelectedMenu = new EventEmitter();

    localSelectedMenu: Array<any> = [];


    constructor() { }

    addMenu = (e) => {
        if (e.keyCode === 13) {
			e.preventDefault();

            let shouldAdd = this.category? this.category.find(data => {
                if(data){
                    return data.name === e.target.value;
                } else {
                    return undefined;
                }
                
            }) : 
            undefined;

            if(shouldAdd === undefined) {
                this.newMenu.emit(e.target.value)
            }
			e.target.value = "";
		}
    }

    checking = (value) => {

        if (this.localSelectedMenu) {
            let index = this.localSelectedMenu.indexOf(value);

            switch (true) {
                case (index >= 0):
                    return true;
                case (index < 0):
                    return false;
                default:
                    return false;
            }
        }
        return false;

    }

    selected = (item) => {
        let index = this.localSelectedMenu.indexOf(item);

        switch(true) {
            case (index >= 0):
                this.localSelectedMenu.splice(index, 1);
                console.log(this.localSelectedMenu);
                this.changeSelectedMenu.emit(this.localSelectedMenu);
                break;
            case (index < 0): 
                this.localSelectedMenu.push(item);
                console.log(this.localSelectedMenu);
                this.changeSelectedMenu.emit(this.localSelectedMenu);
                break;
            default:
                break;
        }
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        if(changes['inputSelectedMenu'] !== undefined && changes['inputSelectedMenu'].currentValue.length === 0 ){
            return this.localSelectedMenu = [];
        
        }
        return;
    }

    ngOnInit() {
        this.localSelectedMenu = this.category.filter( category => this.inputSelectedMenu.indexOf(category._id)>=0);
    }

}
