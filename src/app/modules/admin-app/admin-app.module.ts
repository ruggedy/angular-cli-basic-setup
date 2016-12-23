import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { ComponentsModule } from '../../components';
import { Ng2PaginationModule } from 'ng2-pagination';
import { RoutingModule } from './admin-app.routes';
import { AdminAppComponent } from './admin-app.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RoutingModule,
        ReactiveFormsModule,
        MaterialModule,
        ComponentsModule,
        Ng2PaginationModule,
    ],
    declarations: [
        AdminAppComponent,
        AdminHomeContainerComponent
    ]
})
export class AdminAppModule { }
