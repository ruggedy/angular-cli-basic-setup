import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { ClientAppComponent } from './client-app.component';

import { 
    HomeContainerComponent,
    TestComponent,
    ProcessLinkComponent,
    GreetingsComponent
} from '../../container'

// data resolvers


// route guards

const routes: Route[] = [
    {
        path: 'client',
        component: ClientAppComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeContainerComponent,
                data: {
                    formMode: 'user'
                }
            },
            {
                path: 'verify/:token/:userId',
                component: ProcessLinkComponent
            },
            {
                path: 'test',
                component: TestComponent
            },
            {
                path: 'create-password',
                component: HomeContainerComponent,
                data: {
                    formMode: 'password'
                }
            },
            {
                path: 'test-complete',
                component: GreetingsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class RoutingModule { }
