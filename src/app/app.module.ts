import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

import { ComponentsModule } from './components';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { RouterStoreModule } from '@ngrx/router-store';

import { RoutingModule } from './app.routes';
import { reducer } from './reducers';
import { ClientAppModule } from './modules/client-app/client-app.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { AdminAppModule } from './modules/admin-app/admin-app.module';

// effects imports


//  db schema

// services 
import { FormValidators } from './validators/form-validator';

import { GrowlModule } from './vendorRefactors/growl';

// data resolvers

// route Guards

//  custom pipes

import { PipesModule } from './pipes';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
        GrowlModule,
		ReactiveFormsModule,
		RoutingModule,
        PipesModule,
		MaterialModule.forRoot(),
		ComponentsModule,
		ClientAppModule,
        AdminAppModule,
        AuthenticationModule,
		StoreModule.provideStore(reducer),
		HttpModule,
		RouterStoreModule.connectRouter(),
		StoreDevtoolsModule.instrumentOnlyWithExtension()
	],
	providers: [ 
      
    ],
	bootstrap: [AppComponent]
})
export class AppModule { }
