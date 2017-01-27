import { Component } from '@angular/core';

@Component({
	// moduleId: module.id, -- this is not needed since angular cli uses webpack
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Tour of Heroes';
}