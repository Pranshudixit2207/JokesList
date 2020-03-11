import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JokesModel } from './jokes-module/joke/joke.model';

@Injectable()
export class JokesApiService {

	constructor(private http: HttpClient) { }
	public url = 'https://official-joke-api.appspot.com/jokes/ten';

	getJokesList() {
		return this.http.get<JokesModel[]>(this.url);
	}
}
