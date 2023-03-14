import { Component, OnInit } from '@angular/core';
import { InfoModel } from 'src/app/shared/models/infoModel';
import { EpisodeTableService } from 'src/app/shared/services/Episode-table.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css'],
})
export class EpisodeComponent implements OnInit {
  info: InfoModel;

  displayedColumns: string[] = [
    'id',
    'name',
    'air_date',
    'episode',
    'url',
    'created',
    'detail'
  ];
  dataSource = [];

  constructor(private episodeSrv: EpisodeTableService) { }

  getEpisode(url: string) {
    this.episodeSrv.getEpisode(url).subscribe((data: any) => {
      const { info, results } = data;
      this.dataSource = results;
      this.info = info;
      console.log(this.dataSource);
    });
  }

  ngOnInit(): void {
    this.getEpisode('https://rickandmortyapi.com/api/episode');
  }

  next(): void {
    this.getEpisode(this.info.next);
  }

  preview(): void {
    this.getEpisode(this.info.prev);
  }
}
