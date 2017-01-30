/* tslint:disable:no-unused-variable */
import { TestBed, inject,fakeAsync,tick } from '@angular/core/testing';

import { BrowserModule } 		from '@angular/platform-browser';
import { FormsModule } 			from '@angular/forms';

import { HttpModule } 			from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../in-memory-data.service';

import { AppComponent } 		from '../app.component';
import { HeroDetailComponent } 	from '../hero-detail/hero-detail.component';
import { HeroesComponent } 		from '../heroes/heroes.component';
import { DashboardComponent } 	from '../dashboard/dashboard.component';
import { HeroService } 			from '../services/hero.service';

import { AppRoutingModule }     from '../app-routing.module';
import { HeroSearchComponent } 	from '../hero-search/hero-search.component';

import { APP_BASE_HREF } from '@angular/common'; 

import '../rxjs-extensions';

describe('DashboardComponent tests', () => {

	beforeEach(() => {
		TestBed.configureTestingModule({
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
				{ provide: DashboardComponent, useClass: DashboardComponent },
				{ provide: APP_BASE_HREF, useValue: '/' }
			],
		});
	});
 
 	it('DashboardComponent should be created', 
		fakeAsync(
			inject([DashboardComponent], (comp) => {
				tick();
				expect(comp).toBeTruthy();
			})
		)
	);
 	
	it('DashboardComponent should have HeroService', 
		fakeAsync(
			inject([DashboardComponent], (comp) => {
				tick();
				expect(comp.heroService).toBeTruthy();
			})
		)
	);

	it('DashboardComponent should have Router', 
		fakeAsync(
			inject([DashboardComponent], (comp) => {
				tick();
				expect(comp.router).toBeTruthy();
			})
		)
	);

});