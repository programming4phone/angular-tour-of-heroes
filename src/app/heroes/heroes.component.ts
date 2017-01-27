import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';
import { Router }   from '@angular/router';

@Component({
	// moduleId: module.id,
	selector: 'my-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

 	heroes: Hero[];
	selectedHero: Hero;
	
	constructor( 
		private router: Router,
		private heroService: HeroService
	) { }
	
	ngOnInit(): void {
		this.getHeroes();
	}
  
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
	
	getHeroes(): void {
		this.heroService.getHeroes().subscribe(
			(h: Hero[]) => { // on sucesss
				// Heroes should be listed by power ratings, most powerful first
				h.sort((a,b) => b.rating-a.rating);
				this.heroes = h;
			},
			(err: any) => { // on error
				console.log(err);
			},
			() => { // on completion
			}
		);
	}
	
	add(name: string): void {
		name = name.trim();
		if (!name) { return; }
		this.heroService.create(name).subscribe(
			(h: Hero) => { // on sucesss
				this.heroes.push(h);
				this.selectedHero = null;
			},
			(err: any) => { // on error
				console.log(err);
			},
			() => { // on completion
			}
		);
	}
	
	delete(hero: Hero): void {
		this.heroService
			.delete(hero.id).subscribe(
			(h: any) => { // on sucesss
				this.heroes = this.heroes.filter(h => h !== hero);
				if (this.selectedHero === hero) { 
					this.selectedHero = null; 
				}
			},
			(err: any) => { // on error
				console.log(err);
			},
			() => { // on completion
			}
		);
	}
	
	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}
}
