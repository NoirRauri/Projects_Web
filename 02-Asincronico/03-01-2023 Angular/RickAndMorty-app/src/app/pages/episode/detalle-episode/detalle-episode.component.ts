import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodeModel } from 'src/app/shared/models/episodeModel';
import { EpisodeTableService } from 'src/app/shared/services/Episode-table.service';

@Component({
  selector: 'app-detalle-episode',
  templateUrl: './detalle-episode.component.html',
  styleUrls: ['./detalle-episode.component.css']
})
export class DetalleEpisodeComponent implements OnInit {

  @Input() addEpisode: string;

  dataSource = []
  episode: EpisodeModel;

  constructor(private route: ActivatedRoute, private srvEpi: EpisodeTableService) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.srvEpi.getEpisodeById(id).subscribe((result: any) => {
        // this.dataSource = result;
        this.episode = result;
      })
    } else {
      const url = this.srvEpi.getUrlEpi()
      console.log(url)
      this.srvEpi.getEpisodeByUrl(url).subscribe((result: any) => {
        // this.dataSource = result;
        this.episode = result;
      })
    }
    // this.srvEpi.triggerEpisode.subscribe(link => {
    //   this.srvEpi.getEpisodeByUrl(link)
    // });
  }


}
