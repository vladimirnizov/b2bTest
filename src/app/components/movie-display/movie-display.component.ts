import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Movie} from '../../models/movie.model'


@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css']
})
export class MovieDisplayComponent implements OnInit {
  @Input() currentMovie: Movie;
  @Input() ind: number;
  @Output('del') del = new EventEmitter();

  detail= false;

  constructor() { }

  ngOnInit() {
  }

  showDetail(){
    this.detail=!this.detail;
  }

  delete() {
     this.del.emit(this.ind);
  }
}
