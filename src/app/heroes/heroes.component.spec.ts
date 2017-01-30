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

describe('HeroesComponent test', () => {

	  let fixture;

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
				{ provide: HeroesComponent, useClass: HeroesComponent },
				{ provide: APP_BASE_HREF, useValue: '/' }
			],
		});
	});
 
 	it('HeroesComponent should be created', 
		fakeAsync(
			inject([HeroesComponent], (comp) => {
				tick();
				expect(comp).toBeTruthy();
			})
		)
	);
 	
	it('HeroesComponent should have HeroService', 
		fakeAsync(
			inject([HeroesComponent], (comp) => {
				tick();
				expect(comp.heroService).toBeTruthy();
			})
		)
	);

	it('HeroesComponent should have Router', 
		fakeAsync(
			inject([HeroesComponent], (comp) => {
				tick();
				expect(comp.router).toBeTruthy();
			})
		)
	);
	
});