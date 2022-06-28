import { Component, OnInit } from '@angular/core';
import { SportService } from '../services/sport.service';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

	constructor(private sportService: SportService) { }

	public dataSports = {};

	ngOnInit(): void {
		this.sportService.listAllSport().subscribe(result => {
			var sportResult: any = result

			this.dataSports = sportResult;

			console.log(this.dataSports);
		})
	}
}
