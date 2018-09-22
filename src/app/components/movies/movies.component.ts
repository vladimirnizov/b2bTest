import { Component, OnInit} from '@angular/core';
import {RestService} from '../../services/rest.service'
import {Movie} from '../../models/movie.model'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  currentMovie : Movie;
  movies: Array<Movie>;

  constructor(private _rest: RestService) { }

  ngOnInit() {
    this.movies=new Array<Movie>();
  }


  del(ind:number) {
    this.movies.splice(ind, 1);
  }

  addToList(){
    this.movies.push(this.currentMovie);
    this.currentMovie=null;
  }

  findMovie(event: any) {   
    this._rest.getMovieByName(event.target.value).subscribe((movie: any) => {
      
      if(movie.Response=="True")
      {
      movie = new Movie('','','','','','','','','','','','','','',[],'','','','','','','','','',false, movie); 
      this.currentMovie = movie; 
      }
      else
      this.currentMovie=null;
      });

  }
  

}
