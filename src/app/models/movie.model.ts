import {Rating} from './rating.model';

export class Movie {
   // CTR
   constructor(private _Title: string,
    private _Year: string, 
    private _Rated: string, 
    private _Released: string, 
    private _Runtime: string, 
    private _Genre: string, 
    private _Director: string, 
    private _Writer: string, 
    private _Actors: string, 
    private _Plot: string, 
    private _Language: string, 
    private _Country: string, 
    private _Awards: string, 
    private _Poster: string, 
    private _Ratings: Array<Rating>,
    private _Metascore: string, 
    private _imdbRating: string, 
    private _imdbVotes: string, 
    private _imdbID: string, 
    private _Type: string, 
    private _DVD: string, 
    private _BoxOffice: string, 
    private _Production: string, 
    private _Website: string, 
    private _Response: boolean,
    
    private movie?: Movie) 
    {
    if(this.movie != null) {
      this.Title = movie.Title;
      this.Year = movie.Year;
      this.Rated = movie.Rated;
      this.Released = movie.Released;
      this.Runtime = movie.Runtime;
      this.Genre = movie.Genre;
      this.Director = movie.Director;
      this.Writer = movie.Writer;
      this.Actors = movie.Actors;
      this.Plot = movie.Plot;
      this.Language = movie.Language;
      this.Country = movie.Country;
      this.Awards = movie.Awards;
      this.Poster = movie.Poster;
      this.Ratings = movie.Ratings;
      this.Metascore = movie.Metascore;
      this.imdbRating = movie.imdbRating;
      this.imdbVotes = movie.imdbVotes;
      this.imdbID = movie.imdbID;
      this.Type = movie.Type;
      this.DVD = movie.DVD;
      this.BoxOffice = movie.BoxOffice;
      this.Production = movie.Production;
      this.Website = movie.Website;
      this.Response = movie.Response;
     }
    }

  public get BoxOffice(): string {
    return this._BoxOffice;
  }
  public set BoxOffice(value: string) {
    this._BoxOffice = value;
  }
  public get Production(): string {
    return this._Production;
  }
  public set Production(value: string) {
    this._Production = value;
  }
  public get Website(): string {
    return this._Website;
  }
  public set Website(value: string) {
    this._Website = value;
  }
  public get Type(): string {
    return this._Type;
  }
  public set Type(value: string) {
    this._Type = value;
  }
  public get DVD(): string {
    return this._DVD;
  }
  public set DVD(value: string) {
    this._DVD = value;
  }
  public get imdbID(): string {
    return this._imdbID;
  }
  public set imdbID(value: string) {
    this._imdbID = value;
  }
  public get imdbRating(): string {
    return this._imdbRating;
  }
  public set imdbRating(value: string) {
    this._imdbRating = value;
  }
  public get imdbVotes(): string {
    return this._imdbVotes;
  }
  public set imdbVotes(value: string) {
    this._imdbVotes = value;
  }
  public get Metascore(): string {
    return this._Metascore;
  }
  public set Metascore(value: string) {
    this._Metascore = value;
  }
  public get Poster(): string {
    return this._Poster;
  }
  public set Poster(value: string) {
    this._Poster = value;
  }
  public get Language(): string {
    return this._Language;
  }
  public set Language(value: string) {
    this._Language = value;
  }
  public get Awards(): string {
    return this._Awards;
  }
  public set Awards(value: string) {
    this._Awards = value;
  }
  public get Ratings(): Array<Rating> {
    return this._Ratings;
  }
  public set Ratings(value: Array<Rating>) {
    this._Ratings = value;
  }
  public get Country(): string {
    return this._Country;
  }
  public set Country(value: string) {
    this._Country = value;
  }
  public get Plot(): string {
    return this._Plot;
  }
  public set Plot(value: string) {
    this._Plot = value;
  }
  public get Response_1(): boolean {
    return this._Response;
  }
  public set Response_1(value: boolean) {
    this._Response = value;
  }
  public get Response(): boolean {
    return this._Response;
  }
  public set Response(value: boolean) {
    this._Response = value;
  }
  public get Writer(): string {
    return this._Writer;
  }
  public set Writer(value: string) {
    this._Writer = value;
  }
  public get Actors(): string {
    return this._Actors;
  }
  public set Actors(value: string) {
    this._Actors = value;
  }
  public get Director(): string {
    return this._Director;
  }
  public set Director(value: string) {
    this._Director = value;
  }
  public get Runtime(): string {
    return this._Runtime;
  }
  public set Runtime(value: string) {
    this._Runtime = value;
  }
  public get Genre(): string {
    return this._Genre;
  }
  public set Genre(value: string) {
    this._Genre = value;
  }
  public get Released(): string {
    return this._Released;
  }
  public set Released(value: string) {
    this._Released = value;
  }
  public get Rated(): string {
    return this._Rated;
  }
  public set Rated(value: string) {
    this._Rated = value;
  }
  public get Year(): string {
    return this._Year;
  }
  public set Year(value: string) {
    this._Year = value;
  }
  public get Title(): string {
    return this._Title;
  }
  public set Title(value: string) {
    this._Title = value;
  }
 
}