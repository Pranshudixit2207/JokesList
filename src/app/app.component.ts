import { Component, OnInit } from '@angular/core';
import { JokesApiService } from './jokes-api.service';
import { JokesModel } from './jokes-module/joke/joke.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'jokesList';
	jokesData: Array<JokesModel> = [];
	copyData: any = [];
	constructor(private jokesApiService: JokesApiService) { }

	ngOnInit() {
		this.getAllJokesList();
	}

	getAllJokesList() {
		this.jokesApiService.getJokesList().subscribe(res => {
			const data = res.map(item => {
				const obj = { ...item };
				obj.isPanch = false;
				return obj;
			});
			this.jokesData = data;
			this.copyData = data;
		})
	}
	filteredData(val: JokesModel) {
		this.jokesData = this.copyData.filter((jokes) => {
			return jokes.setup.toLowerCase().indexOf(val) > -1;
		});
	}
	togglePanchline(obj: any) {
		this.jokesData[obj.ind] = obj;
	}
}
