import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { ClientAppComponent } from './client-app.component';


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
