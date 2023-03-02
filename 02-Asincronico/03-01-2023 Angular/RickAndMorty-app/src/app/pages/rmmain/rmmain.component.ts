import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CharacterModel } from 'src/app/shared/models/characterModel';
import { CharacterCardService } from 'src/app/shared/services/character-card.service';
import {MatPaginator} from '@angular/material/paginator';
import { InfoModel } from 'src/app/shared/models/infoModel';

@Component({
  selector: 'app-rmmain',
  templateUrl: './rmmain.component.html',
  styleUrls: ['./rmmain.component.css'],
})
export class RmmainComponent implements OnInit,AfterViewInit{

  // lista:CharacterModel[]=[]

  info:InfoModel
  displayedColumns: string[] = ['id', 'name', 'status','species','gender','image','created'];
  dataSource = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;


  
  constructor(private personjesSrv: CharacterCardService){

    this.personjesSrv.getPersonajes().subscribe((data:any)=>{
      // console.log(data)
      const {info,results}=data;
      this.dataSource=results;
      this.info=info;
      // this.lista=[...this.lista,results]
      console.log(this.dataSource)
    });
    

  }
  ngOnInit():void{
    
  }
  
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  next():void{
    alert('siguiente pag')
  }
  preview():void{
    alert('Anterior pag')
  }
}
