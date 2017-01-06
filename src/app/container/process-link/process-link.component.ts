import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params, ActivatedRouteSnapshot } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as userAction from '../../actions/user';

@Component({
  selector: 'app-process-link',
  templateUrl: './process-link.component.html',
  styleUrls: ['./process-link.component.scss']
})
export class ProcessLinkComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private store:Store<fromRoot.State>) { }

    ngOnInit() {
        
        const { token, userId } = this.route.snapshot.params;

        const payload = {
            userId,
            token
        }

        this.store.dispatch(new userAction.addUserInfoFromLink(payload));
        this.router.navigate(['client', 'create-password']);
    }

}
