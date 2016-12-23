import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormValidators } from '../../validators/form-validator';

@Component({
    selector: 'app-signup-form',
    templateUrl: './signup-form.component.html',
    styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
    form: FormGroup;
    @Input() formMode: string = "login";
    @Output() formData = new EventEmitter();


    get Title() {
        switch (this.formMode) {
            case 'login':
                return "Login";
            case 'signup':
                return "Sign Up";
            default:
                return "Login";
        }
    }

    showConfirm = () => {
        switch (this.formMode) {
            case 'login':
                return false;
            case 'signup':
                return true;
            default:
                return false;
        }
    }

    submit = (event) => {
        this.formData.emit({ value: event.value, formMode:this.formMode});
    }
    constructor(private _fb: FormBuilder, private formValidators: FormValidators) { }

    ngOnInit() {
        this.form = this._fb.group({
            username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)], this.formValidators.checkUsername],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(100)])],
            confirmPassword: ''
        },
        { 
            validator: Validators.compose([this.formValidators.matchPasswords])
        })
    }

}
