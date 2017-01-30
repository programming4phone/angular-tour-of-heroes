import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { HttpModule } 			from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../in-memory-data.service';

import { HeroSearchService }	from './hero-search.service';
import { Hero } 				from '../hero';

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
			declarations: [],
			imports: [
				HttpModule,
				InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 0 })
			],
			providers: [
				{ provide: HeroSearchService, useClass: HeroSearchService }
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