import { Component } from '@angular/core';
import { Message } from 'primeng/primeng';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  
  msg$: Observable<Array<Message>>;

  constructor(private store: Store<fromRoot.State>) {
      this.msg$ = store.select(fromRoot.getMessages);
  }
}
