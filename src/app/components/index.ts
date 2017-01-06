import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2PaginationModule } from 'ng2-pagination';
import { PipesModule } from '../pipes';
import { CarouselModule, TabViewModule } from 'primeng/primeng';
import { SelectModule } from 'ng2-select/ng2-select';

// personal components 
import { SidePanelComponent } from './side-panel/side-panel.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';


export const COMPONENTS = [
    SidePanelComponent,
    ActionBarComponent,
    CreateUserFormComponent
];


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        RouterModule,
        PipesModule,
        CarouselModule,
        TabViewModule,
        Ng2PaginationModule,
        SelectModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})

export class ComponentsModule { }
