import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
	// moduleId: module.id, -- this is not needed since angular cli uses webpack
	selector: 'my-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	heroes: Hero[] = [];

	constructor(private router: Router, private heroService: HeroService) { }

	ngOnInit(): void {
		console.log("DashboardComponent::ngOnInit() entered");
		// Only return the top 4 most powerful heroes
		this.heroService.getHeroes().subscribe(
			(h: Hero[]) => { // on sucesss
				console.log("DashboardComponent::ngOnInit() onSuccess entered");
				// Heroes should be listed by power ratings, most powerful first
				h.sort((a,b) => b.rating-a.rating);
				this.heroes = h.slice(0, 4);
				console.log("DashboardComponent::ngOnInit() onSuccess exited");
			},
			(err: any) => { // on error
				console.log(err);
			},
			() => { // on completion
				console.log("DashboardComponent::ngOnInit() onCompletion entered");
			}
		);
	}

	gotoDetail(id): void {
		this.router.navigate(['/detail', id]);
	}
}
