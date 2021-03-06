import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from '../services/hero.service';
import { Hero } from '../hero';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{

	@Input()
	hero: Hero;
	
	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	) {}

	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => this.heroService.getHero(+params['id']))
			.subscribe(hero => this.hero = hero);
	}
	
	changeRating(rating: number): void {
		this.hero.rating = rating;
	}
	
	goBack(): void {
		this.location.back();
	}
	
	save(): void {
		this.heroService.update(this.hero).subscribe(
			() => { // on sucesss
				this.goBack();
			},
			(err: any) => { // on error
				console.log(err);
			},
			() => { // on completion
			}
		);
	}
}
