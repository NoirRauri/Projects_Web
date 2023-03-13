import { Component, OnInit } from '@angular/core';
import { InfoModel } from 'src/app/shared/models/infoModel';
import { LocationCardService } from 'src/app/shared/services/Location-card.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  info: InfoModel;

  displayedColumns: string[] = [
    'id',
    'name',
    'type',
    'dimension',
    'url',
    'created',
    'detail'
  ];
  dataSource = [];

  constructor(private locationSrv: LocationCardService) { }

  getLocation(url: string) {
    this.locationSrv.getLocation(url).subscribe((data: any) => {
      const { info, results } = data;
      this.dataSource = results;
      this.info = info;
      console.log(this.dataSource);
    });
  }

  ngOnInit(): void {
    this.getLocation('https://rickandmortyapi.com/api/location');
  }

  next(): void {
    this.getLocation(this.info.next);
  }

  preview(): void {
    this.getLocation(this.info.prev);
  }
}
