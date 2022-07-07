import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SportService } from '../services/sport.service';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.page.html',
	styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

	public dataPlayers = {}
	public idPlayer = ''

	constructor(private sportService: SportService, private route: ActivatedRoute, private router: Router) {
		this.route.queryParams.subscribe(params => {
			if (params && params.special) {
				this.idPlayer = JSON.parse(params.special);
			}
		});
	}

	ngOnInit() {
		this.sportService.detailPlayer(this.idPlayer).subscribe(result => {
			var sportResult: any = result
			this.dataPlayers = sportResult;
		})
	}

}
