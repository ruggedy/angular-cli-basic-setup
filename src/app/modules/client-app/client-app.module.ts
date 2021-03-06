import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { ClientAppComponent } from './client-app.component';
import { ComponentsModule } from '../../components';
import { RoutingModule } from './client-app.routes';
import { SharedModule, AccordionModule } from 'primeng/primeng';
import { Ng2PaginationModule } from 'ng2-pagination';

import { 
    HomeContainerComponent,
    TestComponent,
    ProcessLinkComponent,
    GreetingsComponent
} from '../../container'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ComponentsModule,
    RoutingModule,
    AccordionModule,
    SharedModule, 
    Ng2PaginationModule
  ],
  declarations: [
    ClientAppComponent,
    HomeContainerComponent,
    TestComponent,
    ProcessLinkComponent,
    GreetingsComponent
  ]
})
export class ClientAppModule { }
