import { Component, OnInit } from '@angular/core';
import { SportService } from '../services/sport.service';

@Component({
	selector: 'app-tab3',
	templateUrl: 'tab3.page.html',
	styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

	constructor(private sportService: SportService) { }

	public dataPlayers = {}
	public name = ''

	getData() {
		this.sportService.searchPlayer(this.name).subscribe(result => {
			var playerResult: any = result

			this.dataPlayers = playerResult;

			console.log(this.dataPlayers);
		})
	}
}