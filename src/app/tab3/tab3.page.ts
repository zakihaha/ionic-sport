import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { SportService } from '../services/sport.service';

@Component({
	selector: 'app-tab3',
	templateUrl: 'tab3.page.html',
	styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

	constructor(private sportService: SportService, private route: Router) { }

	public dataPlayers = {}
	public name = ''

	getData() {
		this.sportService.searchPlayer(this.name).subscribe(result => {
			var playerResult: any = result
			this.dataPlayers = playerResult;
		})
	}

	detail(player): void {
		let extras: NavigationExtras = {
			queryParams: {
				special: JSON.stringify(player.idPlayer)
			}
		}
		this.route.navigate(['/detail'], extras);
	}
}