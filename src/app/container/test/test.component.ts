import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params, ActivatedRouteSnapshot } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../reducers';
import * as userAction from '../../actions/user';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy {
    
    sub$: Subscription;

    email: string
    constructor(private router: Router, private route: ActivatedRoute, private store:Store<fromRoot.State>) { 
        this.sub$ = Observable.combineLatest([
            store.select(fromRoot.getEmail)
        ])
        .subscribe(data => {
            this.email = data[0];
        })
    }

    handleTestCompletion = ( ) => {
        this.router.navigate(['client', 'test-complete']);
    }

    ngOnInit() {
        
    }

    ngOnDestroy(){
        this.sub$.unsubscribe();
    }

}
