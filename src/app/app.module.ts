import { NgModule } 			from '@angular/core';
import { BrowserModule } 		from '@angular/platform-browser';
import { FormsModule } 			from '@angular/forms';

import { HttpModule } 			from '@angular/http';
/*
* to install InMemoryWebApiModule/InMemoryDataService
* enter the following from the project folder
* npm i angular-in-memory-web-api
*/
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } 		from './app.component';
import { HeroDetailComponent } 	from './hero-detail/hero-detail.component';
import { HeroesComponent } 		from './heroes/heroes.component';
import { DashboardComponent } 	from './dashboard/dashboard.component';
import { HeroService } 			from './services/hero.service';

import { AppRoutingModule }     from './app-routing.module';
import { HeroSearchComponent } 	from './hero-search/hero-search.component';

import { APP_BASE_HREF } from '@angular/common'; 

import './rxjs-extensions';

@NgModule({
	declarations: [
		AppComponent,
		HeroDetailComponent,
		HeroesComponent,
		DashboardComponent,
		HeroSearchComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		AppRoutingModule
	],
	providers: [
		{ provide: HeroService, useClass: HeroService },
		{ provide: APP_BASE_HREF, useValue: '/' }
	],
  bootstrap: [AppComponent]
})


export class AppModule { }
