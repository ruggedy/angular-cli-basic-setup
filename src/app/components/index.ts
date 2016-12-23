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
import { FormsComponentComponent } from './forms-component/forms-component.component';
import { MenuFormsComponent } from './menu-forms/menu-forms.component';
import { MenuFormsMenuCreateComponent } from './menu-forms-menu-create/menu-forms-menu-create.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { TableCardComponent } from './table-card/table-card.component';
import { WorkingHoursCardComponent } from './working-hours-card/working-hours-card.component';
import { MenuFullCardComponent } from './menu-full-card/menu-full-card.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { RestaurantUserComponent } from './restaurant-user/restaurant-user.component';
import { RestaurantLocationsComponent } from './restaurant-locations/restaurant-locations.component';
import { RestaurantOpeningComponent } from './restaurant-opening/restaurant-opening.component';
import { CategoriesComponentComponent } from './categories-component/categories-component.component';


export const COMPONENTS = [
    SidePanelComponent,
    FormsComponentComponent,
    MenuFormsComponent,
    MenuFormsMenuCreateComponent,
    SignupFormComponent,
    InfoCardComponent,
    TableCardComponent,
    WorkingHoursCardComponent,
    MenuFullCardComponent,
    ActionBarComponent,
    RestaurantUserComponent,
    RestaurantLocationsComponent,
    RestaurantOpeningComponent,
    CategoriesComponentComponent
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
