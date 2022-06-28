import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SportService {

	constructor(private http: HttpClient) { }
  
  listAllSport () {
    return this.http.get('https://www.thesportsdb.com/api/v1/json/2/all_sports.php');
  }

  listAllLeagues () {
    return this.http.get('https://www.thesportsdb.com/api/v1/json/2/all_leagues.php');
  }

  searchPlayer (name) {
    return this.http.get(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${name}`);
  } 
}

