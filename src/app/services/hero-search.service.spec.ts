import { TestBed, async, inject,fakeAsync,tick } from '@angular/core/testing';

import { BrowserModule } 		from '@angular/platform-browser';
import { FormsModule } 			from '@angular/forms';

import { HttpModule } 			from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../in-memory-data.service';

import { AppComponent } 		from '../app.component';
import { HeroDetailComponent } 	from '../hero-detail/hero-detail.component';
import { HeroesComponent } 		from '../heroes/heroes.component';
import { DashboardComponent } 	from '../dashboard/dashboard.component';
import { HeroSearchService } 	from '../services/hero-search.service';

import { AppRoutingModule }     from '../app-routing.module';
import { HeroSearchComponent } 	from '../hero-search/hero-search.component';
import { Hero } 				from '../hero';

import { APP_BASE_HREF } from '@angular/common'; 

import { Observable } 				from 'rxjs';
import '../rxjs-extensions';

	/*
	* BE CAREFUL HERE!
	* The InMemoryDataService must use a delay of ZERO,
	* otherwise the test will fail with this error:
	*     1 periodic timer(s) still in the queue
	*/
	
describe('App: AngularTourOfHeroes', () => {

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
				InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 0 }),
				AppRoutingModule
			],
			providers: [
				{ provide: HeroSearchService, useClass: HeroSearchService },
				{ provide: APP_BASE_HREF, useValue: '/' }
			],
		});
	});
 
 	it('HeroSearchService should be created', 
		fakeAsync(
			inject([HeroSearchService], (comp) => {
				tick();
				expect(comp).toBeTruthy();
			})
		)
	);
	
 	it('HeroSearchService::getHeroes() should return an Observable', 
		fakeAsync(
			inject([HeroSearchService], (svc) => {
				tick();
				svc.search('b').subscribe(
					(heroes: Hero[]) => { // on sucesss
						expect(heroes).toBeDefined();
						expect(heroes.length>0).toBeTruthy();
					},
					(err: any) => { // on error
						expect(err).toBeFalsey();
					},
					() => { // on completion
					}
				);
			})
		)
	);
	
 	it('HeroSearchService::getHeroes() not found should return an Observable', 
		fakeAsync(
			inject([HeroSearchService], (svc) => {
				tick();
				svc.search('z').subscribe(
					(heroes: Hero[]) => { // on sucesss
						expect(heroes).toBeDefined();
						expect(heroes.length>0).toBeFalsy();
					},
					(err: any) => { // on error
						expect(err).toBeFalsey();
					},
					() => { // on completion
					}
				);
			})
		)
	);
	
	it('HeroSearchService::getHeroes() undefined should return an Observable', 
		fakeAsync(
			inject([HeroSearchService], (svc) => {
				tick();
				svc.search(undefined).subscribe(
					(heroes: Hero[]) => { // on sucesss
						expect(heroes).toBeDefined();
						expect(heroes.length>0).toBeFalsy();
					},
					(err: any) => { // on error
						expect(err).toBeFalsey();
					},
					() => { // on completion
					}
				);
			})
		)
	);
	
  });