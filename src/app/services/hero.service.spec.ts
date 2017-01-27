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
import { HeroService } 			from '../services/hero.service';

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
				{ provide: HeroService, useClass: HeroService },
				{ provide: DashboardComponent, useClass: DashboardComponent },
				{ provide: APP_BASE_HREF, useValue: '/' }
			],
		});
	});
 
 	it('HeroService should be created', 
		fakeAsync(
			inject([HeroService], (comp) => {
				tick();
				expect(comp).toBeTruthy();
			})
		)
	);
	
 	it('HeroService::getHeroes() should return an Observable', 
		fakeAsync(
			inject([HeroService], (svc) => {
				tick();
				svc.getHeroes().subscribe(
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
 	
 	it('HeroService::getHero() should return an Observable', 
		fakeAsync(
			inject([HeroService], (svc) => {
				tick();
				svc.getHero(11).subscribe(
					(hero: Hero[]) => { // on sucesss
						expect(hero).toBeDefined();
						expect(hero.name==="Mr. Nice").toBeTruthy();
					},
					(err: any) => { // on error
						expect(err).toBeUndefined();
					},
					() => { // on completion
					}
				);
			})
		)
	);
	
 	it('HeroService::getHero() should return an error when not found', 
		fakeAsync(
			inject([HeroService], (svc) => {
				tick();
				svc.getHero(99).subscribe(
					(hero: Hero) => { // on sucesss
						expect(hero).toBeUndefined();
					},
					(err: any) => { // on error
						expect(err).toBeDefined();
					},
					() => { // on completion
					}
				);
			})
		)
	);
	
 	it('HeroService::create() should return an Observable', 
		fakeAsync(
			inject([HeroService], (svc) => {
				let newHeroeName :string = "GalactDust";
				tick();
				svc.create(newHeroeName).subscribe(
					(hero: Hero) => { // on sucesss
						expect(hero).toBeDefined();
						expect(hero.name===newHeroeName).toBeTruthy();
					},
					(err: any) => { // on error
						expect(err).toBeUndefined();
					},
					() => { // on completion
					}
				);
			})
		)
	);
	
	it('HeroService::delete() should return an Observable', 
		fakeAsync(
			inject([HeroService], (svc) => {
				tick();
				svc.delete(11).subscribe(
					() => { // on sucesss
					},
					(err: any) => { // on error
						expect(err).toBeUndefined();
					},
					() => { // on completion
					}
				);
			})
		)
	);
	
	
  });