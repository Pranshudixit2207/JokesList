import { Component, Input, Output, EventEmitter } from '@angular/core';
import { JokesModel } from './joke.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
  @Input() jokesData: any;
  @Output() filteredData = new EventEmitter();
  @Output() togglePanchline = new EventEmitter();
  constructor() { }


  filterJokes(eve: any) {
    this.filteredData.emit(eve.target.value);
  }
  toggleLine(joke: JokesModel, ind: number) {
    const obj = { ...joke, isPanch: !joke.isPanch, ind: ind };
    this.togglePanchline.emit(obj);
  }

}
