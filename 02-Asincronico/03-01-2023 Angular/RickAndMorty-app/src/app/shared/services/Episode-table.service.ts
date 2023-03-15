import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { EpisodeModel } from '../models/episodeModel';

@Injectable({
  providedIn: 'root',
})
export class EpisodeTableService {

  @Output() triggerEpisode = new EventEmitter<string>();

  urlEpi: string;

  setUrlEpi(url: string): void {
    this.urlEpi = url;
  }

  getUrlEpi(): string {
    return this.urlEpi;
  }

  constructor(private http: HttpClient) { }

  getEpisode(url: string): Observable<any> {
    return this.http.get(url);
  }

  getEpisodeByUrl(url?: string): Observable<EpisodeModel> {
    if (url) {
      console.log('v')
      return this.http.get<EpisodeModel>(url);
    } else {
      console.log(this.urlEpi)
      return this.http.get<EpisodeModel>(this.urlEpi);
    }
  }

  getEpisodeById(id: any): Observable<EpisodeModel> {
    return this.http.get<EpisodeModel>(
      'https://rickandmortyapi.com/api/episode/' + id
    );
  }
}
