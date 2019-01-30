import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  location: { lat: number, lng: number };
  constructor(public geolocation: Geolocation) { }
  getGeoLocation() {
    this.geolocation.getCurrentPosition().then((res) => {
      this.location = {
        lat: res.coords.latitude,
        lng: res.coords.longitude
      }
    })
  }
}
