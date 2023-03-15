import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleCharacterModel } from 'src/app/shared/models/detalleCharacterModel';
import { CharacterCardService } from 'src/app/shared/services/character-card.service';
import { EpisodeTableService } from 'src/app/shared/services/Episode-table.service';

@Component({
  selector: 'app-detalle-personajes',
  templateUrl: './detalle-personajes.component.html',
  styleUrls: ['./detalle-personajes.component.css'],
})
export class DetallePersonajesComponent implements OnChanges, OnInit, OnDestroy {

  // @Input() dataEntrante: any;
  personaje: DetalleCharacterModel;

  constructor(route: ActivatedRoute, srv: CharacterCardService, private srvEpi: EpisodeTableService, private rauter: Router) {

    const id = route.snapshot.paramMap.get('id');

    srv.getPersonajeById(id).subscribe((result: any) => {
      this.personaje = result;
      // console.log(this.personaje); 
    });

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes =>', changes)
  }

  ngOnInit(): void {
    console.log('OnInit =>')
  }

  ngOnDestroy(): void {
    // console.log('OnDestroy =>')
  }

  getIdEpisode(episode: string) {
    let link = episode.split("episode/");
    let idlink = link[1];
    // console.log(idlink)
    return idlink;
  }

  sendEpisode(episode: string) {
    // console.log(episode)
    this.srvEpi.setUrlEpi(episode);
    this.rauter.navigate(['/Episode/detalleEpisode']);
    // this.srvEpi.triggerEpisode.emit(episode);
  }

}
