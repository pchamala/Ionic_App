import { Component, OnInit } from '@angular/core';
declare var window: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  public map: any = {};
  lat: number = 26.715342;
  lng: number = -80.053375;
  constructor() {
    this.map = {
      lat: 26.715342,
      lng: -80.053375,
      zoom: 12,
      markerLabel: "2884 Tennis Club Dr"
    }
  }
  goToDirections() {
    window.location = `geo:${this.lat},${this.lng};u=35`;
  }
  ngOnInit() {

  }
}
