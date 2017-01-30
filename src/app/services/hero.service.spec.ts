import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { HttpModule } 			from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../in-memory-data.service';

import { HeroService } 			from '../services/hero.service';
import { Hero } 				from '../hero';

import { Observable } 				from 'rxjs';
import '../rxjs-extensions';

	/*
	* BE CAREFUL HERE!
	* The InMemoryDataService must use a delay of ZERO,
	* otherwise the test will fail with this error:
	*     1 periodic timer(s) still in the queue
	*/
	
describe('HeroService test', () => {

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [],
			imports: [
				HttpModule,
				InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 0 })
			],
			providers: [
				{ provide: HeroService, useClass: HeroService }
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
	
 	it('HeroService::getHero() non-existent hero should return an error when not found', 
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
	
	it('HeroService::delete() non-existent hero should return an Observable', 
		fakeAsync(
			inject([HeroService], (svc) => {
				tick();
				svc.delete(600).subscribe(
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
	
	it('HeroService::update() should return an Observable', 
		fakeAsync(
			inject([HeroService], (svc) => {
				tick();
				let updatedHero: Hero = new Hero();
				updatedHero.id=20;
				updatedHero.name="Toranado";
				updatedHero.rating=5;
				updatedHero.description="From weather to automobile.";
				svc.update(updatedHero).subscribe(
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
	
	it('HeroService::update() non-existent hero should return an error', 
		fakeAsync(
			inject([HeroService], (svc) => {
				tick();
				let updatedHero: Hero = new Hero();
				updatedHero.id=62;
				updatedHero.name="Toranado";
				updatedHero.rating=5;
				updatedHero.description="From weather to automobile.";
				svc.update(updatedHero).subscribe(
					() => { // on sucesss
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
	
	
  });