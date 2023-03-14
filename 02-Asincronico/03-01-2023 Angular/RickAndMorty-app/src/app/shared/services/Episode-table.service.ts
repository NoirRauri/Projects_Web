import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EpisodeModel } from '../models/episodeModel';

@Injectable({
  providedIn: 'root',
})
export class EpisodeTableService {

  constructor(private http: HttpClient) { }

  getEpisode(url: string): Observable<any> {
    return this.http.get(url);
  }

  getEpisodeById(id: any): Observable<EpisodeModel> {
    return this.http.get<EpisodeModel>(
      'https://rickandmortyapi.com/api/episode/' + id
    );
  }
}
