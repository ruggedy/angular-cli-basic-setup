import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormValidators } from '../../validators/form-validator';

@Component({
    selector: 'app-create-user-form',
    templateUrl: './create-user-form.component.html',
    styleUrls: ['./create-user-form.component.scss']
})
export class CreateUserFormComponent implements OnInit {
    email: String;

    form: FormGroup;

    @Input() formMode: String = "user";

    @Output() formData = new EventEmitter();
    constructor(private fb: FormBuilder, private formValidators: FormValidators) { }
    
    get title(){
        return this.formMode === 'user'? 'Create new user' : 'Create Password';
    }
    handleFormSubmit = (form:FormGroup) => {
        if(form.valid){
            switch(this.formMode){
                case 'user':{
                    const payload = {
                        type: 'user',
                        value: form.value.email
                    }
                    return this.formData.emit(payload);
                }
                case 'password':{
                    const payload = {
                        type: 'password',
                        value: form.value.password
                    }
                    return this.formData.emit(payload);
                }
                default:
                    break;
            }
            this.formData.emit(form.value.email)
        }
    }

    handleEmailInput = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();

            const userData: User = {
                email: e.target.value
            }
            this.formData.emit(userData);
            e.target.value = "";
        }
    }
    ngOnInit() {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.form = this.fb.group({
            email: ['', this.formMode === 'user' ? Validators.compose([Validators.required, Validators.pattern(emailRegex)]) : Validators.compose([null])],
            password: ['', this.formMode !== 'user' ? Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(100)]) : Validators.compose([null])],
            confirmPassword: ['', this.formMode !== 'user' ? Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(100)]) : Validators.compose([null])]
        }, {
                validator: this.formMode !== 'user' ? Validators.compose([this.formValidators.matchPasswords]) : Validators.compose([null])
            })
    }

}
