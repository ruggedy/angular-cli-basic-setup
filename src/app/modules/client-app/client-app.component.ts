import { Component, OnInit, ChangeDetectionStrategy, ViewContainerRef, OnDestroy } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';


@Component({
    selector: 'app-client-app',
    templateUrl: './client-app.component.html',
    styleUrls: ['./client-app.component.scss'],
})
export class ClientAppComponent implements OnInit, OnDestroy {

    constructor( ) { }





    ngOnInit() {
    }

    ngOnDestroy() {
    }

}
