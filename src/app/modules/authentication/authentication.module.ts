import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';

import { ComponentsModule } from '../../components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    MaterialModule,
    AuthenticationRoutingModule
  ],
  declarations: [AuthenticationComponent]
})
export class AuthenticationModule { }
