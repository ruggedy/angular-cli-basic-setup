import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MenuData } from '../../models/menu-form';

@Component({
    selector: 'app-menu-forms',
    templateUrl: './menu-forms.component.html',
    styleUrls: ['./menu-forms.component.scss']
})
export class MenuFormsComponent implements OnInit {

    @Input() allergens: Array<any> = [];
    @Input() options: Array<any> = [];
    @Input() menuData: MenuData;
    @Input() category: Array<any> = [];

    @Output() newMenu = new EventEmitter();

    selectedMenu: Array<any> = [];
    selectedAllergies: Array<any> = [];
    selectedBlacklistAllergies: Array<any> = [];
    selectedOptions: Array<any> = [];


    @Output() menuComplete = new EventEmitter();
    @Output() invalidForm = new EventEmitter();

    form: FormGroup;

    constructor(public _fb: FormBuilder) {
    }

    checking = (value, arrayValue) => {

        if (arrayValue) {
            let index = arrayValue.indexOf(value);

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

    selected = (value, arrayValue: Array<any>, arrayValue2?: Array<any>) => {
        let index = arrayValue.indexOf(value);
        let index2 = arrayValue2 ? arrayValue2.indexOf(value) : null;

        switch (true) {
            case (index >= 0):
                arrayValue = [...arrayValue.slice(0, index), ...arrayValue.slice(index + 1)];
                if (index2 !== null && index2 >= 0) {
                    arrayValue2 = [...arrayValue2.slice(0, index), ...arrayValue2.slice(index + 1)];
                }
                return { value1: arrayValue, value2: arrayValue2 }
            case (index < 0):
                arrayValue = [...arrayValue, value];
                return { value1: arrayValue, value2: arrayValue2 }
            default:
                break;
        }
    }

    selectionArrays = (value, type) => {
        switch (type) {
            case 'allergy': {
                const { value1, value2} = this.selected(value, this.selectedAllergies, this.selectedBlacklistAllergies);
                this.selectedAllergies = value1;
                this.selectedBlacklistAllergies = value2;
                break;
            }
            case 'options': {
                const { value1 } = this.selected(value, this.selectedOptions);
                this.selectedOptions = value1
                break;
            }
            case 'blacklist': {
                console.log(this.selectedBlacklistAllergies);
                const { value1 } = this.selected(value, this.selectedBlacklistAllergies);                
                this.selectedBlacklistAllergies = value1;
                break;
            }    
            default:
                break;
        }
    }

    checkingArrays = (value, type) => {
        switch (type) {
            case 'allergy':
                return this.checking(value, this.selectedAllergies);
            case 'options':
                return this.checking(value, this.selectedOptions);
            case 'blacklist':
                return this.checking(value, this.selectedBlacklistAllergies);
            default:
                break;
        }
    }

    handleSelectedMenu = (event) => {
        console.log(event);
        let menuIds = event.map(data => data._id);
        this.selectedMenu = [...menuIds];
    }

    save = (form: FormGroup) => {
        if (!form.valid) {
            this.invalidForm.emit();
            return;
        }
        let value = form.value;
        
        if(!!this.menuData) {
            value['_id'] = this.menuData._id;
        }
        value['category'] = this.selectedMenu;
        value['options'] = this.selectedOptions;
        value['allergens'] = this.selectedAllergies;
        value['blacklistAllergens'] = this.selectedBlacklistAllergies;

        this.menuComplete.emit(form.value);

        this.selectedMenu = [];
        this.selectedOptions = [];
        this.selectedAllergies = [];
        this.selectedBlacklistAllergies = [];
        this.form.reset();
        return;
    }

    ngOnInit() {
        console.log(this.menuData);
        this.form = this._fb.group({
            name: ['', Validators.required],
            description: [''],
            category: [''],
            options: [this.selectedOptions],
            allergens: [this.selectedAllergies],
            blacklistAllergens: [this.selectedBlacklistAllergies]
        })

        if (!!this.menuData) {
            const { name, description, category, options, allergens, blacklistAllergens } = this.menuData;
            this.form.patchValue({
                name,
                description,
                category,
                options,
                allergens,
                blacklistAllergens
            });

            this.selectedMenu = this.menuData.category;
            this.selectedAllergies = this.menuData.allergens;
            this.selectedBlacklistAllergies = this.menuData.blacklistAllergens;
            this.selectedOptions = this.menuData.options;

        }
    }

}
