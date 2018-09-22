import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

const apikey = '&apikey=388734b8';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  shared: number;

  url = 'http://www.omdbapi.com/?t=';
  constructor(private http: HttpClient) { }

  getMovieByName(name:string){
    return this.http.get(this.url+name+apikey).pipe(
      map(
        (response)=>{
      return response;
    }
  ));
  }

}
