import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CharacterCardService } from 'src/app/shared/services/character-card.service';
import { MatPaginator } from '@angular/material/paginator';
import { InfoModel } from 'src/app/shared/models/infoModel';
import { CharacterModel } from 'src/app/shared/models/characterModel';

@Component({
  selector: 'app-rmmain',
  templateUrl: './rmmain.component.html',
  styleUrls: ['./rmmain.component.css'],
})
export class RmmainComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [
    'id',
    'name',
    'status',
    'species',
    'gender',
    'image',
    'created',
    'detalle',
  ];
  dataSource = [];
  info: InfoModel;
  // lista: CharacterModel[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private personajesSrv: CharacterCardService) { }

  getPersonajes(url: string) {
    this.personajesSrv.getPersonajes(url).subscribe((data: any) => {
      // this.lista = [];
      // console.log(data)
      const { info, results } = data;
      this.dataSource = results;
      this.info = info;
      // this.lista = [...this.lista, results]
      console.log(this.dataSource);
    });
  }

  ngOnInit(): void {
    this.getPersonajes('https://rickandmortyapi.com/api/character');
  }

  next(): void {
    this.getPersonajes(this.info.next);
  }
  preview(): void {
    this.getPersonajes(this.info.prev);
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
}
