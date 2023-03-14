import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalleCharacterModel } from 'src/app/shared/models/detalleCharacterModel';
import { CharacterCardService } from 'src/app/shared/services/character-card.service';

@Component({
  selector: 'app-detalle-personajes',
  templateUrl: './detalle-personajes.component.html',
  styleUrls: ['./detalle-personajes.component.css'],
})
export class DetallePersonajesComponent implements OnInit {

  personaje: DetalleCharacterModel;
  constructor(route: ActivatedRoute, srv: CharacterCardService) {
    const id = route.snapshot.paramMap.get('id');

    srv.getPersonajeById(id).subscribe((result: any) => {
      this.personaje = result;
      console.log(this.personaje);
    });
  }

  ngOnInit(): void {

  }
}
