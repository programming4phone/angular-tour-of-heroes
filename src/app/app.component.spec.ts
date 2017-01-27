/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';

import { BrowserModule } 		from '@angular/platform-browser';
import { FormsModule } 			from '@angular/forms';

import { HttpModule } 			from '@angular/http';
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

describe('App: AngularTourOfHeroes', () => {
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
				{ provide: APP_BASE_HREF, useValue: '/' }
			],
		});
	});
  
	it('AppComponent should be created', async(() => {
		let fixture = TestBed.createComponent(AppComponent);
		let app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));
  
    it(`AppComponent should have as title 'Tour of Heroes'`, async(() => {
		let fixture = TestBed.createComponent(AppComponent);
		let app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('Tour of Heroes');
	}));

	it('AppComponent should render title in a h1 tag', async(() => {
		let fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		let compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('Tour of Heroes');
	}));
  
  });