import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent  implements OnInit{
	heroes: Hero[];
	title = 'Tour of Heroes';
	selectedHero: Hero;
	
	constructor(private heroService: HeroService) { }
	
	ngOnInit(): void {
		this.getHeroes();
	}
  
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
	
	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
}
