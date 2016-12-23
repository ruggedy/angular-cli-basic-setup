import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { RestaurantForm } from '../../models/restaurant-form';

import * as _ from 'lodash';

@Component({
    selector: 'app-forms-component',
    templateUrl: './forms-component.component.html',
    styleUrls: ['./forms-component.component.scss'],
})
export class FormsComponentComponent implements OnInit {
    @Input() timeOptions: any;
    @Input() daysInWeek: any;
    @Input() editData: RestaurantForm;
    @Input() formInitValue: any;
    @Output() invalidForm = new EventEmitter();
    @Output() formValue = new EventEmitter();

    form: FormGroup;

    constructor(private _formBuilder: FormBuilder) {

    }

    save = (form: FormGroup) => {
        if (!form.valid) {
            this.invalidForm.emit(true);
        } else {
            let value: RestaurantForm = form.value;
            if (this.editData !== null) {
                console.log('it hits')
                value['_id'] = this.editData._id
            }
            this.formValue.emit(value);
        }

    }

    initAddress = () => {
        return this._formBuilder.group({
            address: ['', Validators.required],
            address2: [''],
            city: ['', Validators.required],
            postcode: ['', Validators.required],
            state: ['']
        })
    }

    addAddress = () => {
        const control = <FormArray>this.form.controls['locations'];
        control.push(this.initAddress());
    }

    removeAddress = (i: number) => {
        const control = <FormArray>this.form.controls['locations'];
        control.removeAt(i);
    }

    checkInit = () => {
        let array = this.editData ? this.editData.locations : null;
        let newArray = []
        if (array && array.length > 1) {
            _.times(array.length, () => newArray.push(this.initAddress()));
        } else {
            newArray.push(this.initAddress());
        }
        return newArray
    }


    ngOnInit() {
        const emailRegex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

        this.form = this._formBuilder.group({
            restaurantName: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            locations: this._formBuilder.array([
                ...this.checkInit()
            ]),
            opening: this._formBuilder.group({
                monday: this._formBuilder.group({
                    start: ['0:00'],
                    end: ['0:00']
                }),
                tuesday: this._formBuilder.group({
                    start: ['0:00'],
                    end: ['0:00']
                }),
                wednesday: this._formBuilder.group({
                    start: ['0:00'],
                    end: ['0:00']
                }),
                thursday: this._formBuilder.group({
                    start: ['0:00'],
                    end: ['0:00']
                }),
                friday: this._formBuilder.group({
                    start: ['0:00'],
                    end: ['0:00']
                }),
                saturday: this._formBuilder.group({
                    start: ['0:00'],
                    end: ['0:00']
                }),
                sunday: this._formBuilder.group({
                    start: ['0:00'],
                    end: ['0:00']
                })
            }),
            contact: this._formBuilder.group({
                email: ['', [Validators.required, Validators.pattern(emailRegex)]],
                phone: ['', Validators.required]
            })
        })

        if (!!this.editData) {

            const testLocation = () => {
                let LocationsValue = [];

                this.editData.locations.forEach(value => {
                    LocationsValue.push(value);
                })

                return LocationsValue;
            }

            const { restaurantName, firstName, lastName, locations, opening, contact } = this.editData;
            const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = opening;
            this.form.patchValue({
                restaurantName,
                firstName,
                lastName,
                locations: testLocation(),
                opening: {
                    monday: {
                        start: monday.start,
                        end: monday.end
                    },
                    tuesday: {
                        start: tuesday.start,
                        end: tuesday.end
                    },
                    wednesday: {
                        start: wednesday.start,
                        end: wednesday.end
                    },
                    thursday: {
                        start: thursday.start,
                        end: thursday.end
                    },
                    friday: {
                        start: friday.start,
                        end: friday.end
                    },
                    saturday: {
                        start: saturday.start,
                        end: saturday.end
                    },
                    sunday: {
                        start: sunday.start,
                        end: sunday.end
                    }
                },
                contact
            })
        }

    }

}
