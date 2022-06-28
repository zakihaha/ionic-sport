import { Component, OnInit } from '@angular/core';
import { SportService } from '../services/sport.service';

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

	constructor(private sportService: SportService) { }

	public dataLeagues = {};

	ngOnInit(): void {
		this.sportService.listAllLeagues().subscribe(result => {
			var LeaguesResult: any = result

			this.dataLeagues = LeaguesResult;

			console.log(this.dataLeagues);
		})
	}
}