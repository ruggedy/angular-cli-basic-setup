import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';


// models import 

import { User } from '../../models/user';

// store imports 

import { Store } from '@ngrx/store';
import * as userActions from '../../actions/user';
import * as fromRoot from '../../reducers';

@Component({
    selector: 'app-home-container',
    templateUrl: './home-container.component.html',
    styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit, OnDestroy {

    formMode: string;
    sub$: Subscription;
    userId: String;
    token: String;

    constructor(private store: Store<fromRoot.State>, private router: Router, private route: ActivatedRoute) {
        this.sub$ = Observable.combineLatest([
            store.select(fromRoot.getUserId),
            store.select(fromRoot.getToken)
        ])
            .subscribe(data => {
                this.userId = data[0];
                this.token = data[1];
            })
    }


    handleUserData = (event) => {
        switch (event.type) {
            case 'user': {
                const email = event.value;

                const payload = { email }
                return this.store.dispatch(new userActions.AddInit(payload));
            }

            case 'password': {
                const password = event.value;
                const { userId, token} = this
                const payload = { password, userId, token };

                return this.store.dispatch(new userActions.addUserPasswordInit(payload));
            }

            default:
                break;
        }
    }

    ngOnInit() {
        this.formMode = this.route.snapshot.data['formMode'];
    }

    ngOnDestroy() {
        this.sub$.unsubscribe();
    }

}
