import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { locationModel } from 'src/app/shared/models/locationModel';
import { LocationCardService } from 'src/app/shared/services/Location-card.service'

@Component({
  selector: 'app-detalle-location',
  templateUrl: './detalle-location.component.html',
  styleUrls: ['./detalle-location.component.css']
})
export class DetalleLocationComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'name',
    'type',
    'dimension',
    'residents',
    'url',
    'created'
  ];
  dataSource = []

  location: locationModel;

  constructor(route: ActivatedRoute, srv: LocationCardService) {
    const id = route.snapshot.paramMap.get('id');

    srv.getLocationById(id).subscribe((result: any) => {
      this.dataSource = result;
      this.location = result;
    })
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
