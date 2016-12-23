import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { environment } from '../../../environments/environment';

import { AdminAppComponent } from './admin-app.component';

// data resolvers


// route guards


const routes: Route[] = [
  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class RoutingModule { }
