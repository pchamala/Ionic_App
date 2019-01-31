import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  location: { lat: number, lng: number };
  imgSrc: any;
  galImgSrc: any;
  notificationResults: string;
  constructor(public geolocation: Geolocation) {
  }
  scheduleNotification() {
    this.galImgSrc = this.imgSrc = this.location = null;
    LocalNotifications.schedule({
      id: 1,
      title: 'New Notification',
      text: 'This is a sample notification',
      data: {
        id: 2,
        name: 'New Notification 2'
      }
    })
  }
  getGeoLocation() {
    this.galImgSrc = this.imgSrc = null;
    this.geolocation.getCurrentPosition().then((res) => {
      this.location = {
        lat: res.coords.latitude,
        lng: res.coords.longitude
      }
    })
  }
  takeAPic() {
    this.location = this.galImgSrc = null;
    let options: CameraOptions = {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.PNG,
      targetHeight: 500,
      targetWidth: 500,
      saveToPhotoAlbum: true
    };
    Camera.getPicture(options).then((imageUri) => {
      this.imgSrc = imageUri;
    })
  }
  picFromGallery() {
    this.location = this.imgSrc = null;
    let options: CameraOptions = {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: Camera.EncodingType.PNG,
      targetHeight: 500,
      targetWidth: 500,
      saveToPhotoAlbum: false
    };
    Camera.getPicture(options).then((imageUri) => {
      this.galImgSrc = imageUri;
    })
  }
}
