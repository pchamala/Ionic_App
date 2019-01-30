import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AssetDetail } from '../models/assetDetails';
import { MapPage } from '../map/map.page';

declare var window: any;
@Component({
    selector: 'assetdetails',
    templateUrl: 'asset-details.html',
    styleUrls: ['asset-details.scss'],
})
export class AssetDetails {
    assets: AssetDetail[];
    lat: number = 26.715342;
    lng: number = -80.053375;
    constructor(public navCtrl: NavController) {
        this.assets = [{
            HE: "1",
            DAAwards: "324.1",
            DAPrice: "49.58",
            RTMW: "332.23",
            RTPrice: "23.6"
        },
        {
            HE: "2",
            DAAwards: "324.1",
            DAPrice: "49.58",
            RTMW: "332.23",
            RTPrice: "23.6"
        },
        {
            HE: "3",
            DAAwards: "324.1",
            DAPrice: "49.58",
            RTMW: "332.23",
            RTPrice: "23.6"
        },
        {
            HE: "4",
            DAAwards: "324.1",
            DAPrice: "49.58",
            RTMW: "332.23",
            RTPrice: "23.6"
        },
        {
            HE: "5",
            DAAwards: "324.1",
            DAPrice: "49.58",
            RTMW: "332.23",
            RTPrice: "23.6"
        },
        {
            HE: "6",
            DAAwards: "324.1",
            DAPrice: "49.58",
            RTMW: "332.23",
            RTPrice: "23.6"
        },
        {
            HE: "7",
            DAAwards: "324.1",
            DAPrice: "49.58",
            RTMW: "332.23",
            RTPrice: "23.6"
        },
        {
            HE: "8",
            DAAwards: "324.1",
            DAPrice: "49.58",
            RTMW: "332.23",
            RTPrice: "23.6"
        },
        {
            HE: "9",
            DAAwards: "324.1",
            DAPrice: "49.58",
            RTMW: "332.23",
            RTPrice: "23.6"
        },
        {
            HE: "10",
            DAAwards: "324.1",
            DAPrice: "49.58",
            RTMW: "332.23",
            RTPrice: "23.6"
        },
        {
            HE: "11",
            DAAwards: "324.1",
            DAPrice: "49.58",
            RTMW: "332.23",
            RTPrice: "23.6"
        },
        {
            HE: "12",
            DAAwards: "324.1",
            DAPrice: "49.58",
            RTMW: "332.23",
            RTPrice: "23.6"
        },
        {
            HE: "13",
            DAAwards: "324.1",
            DAPrice: "49.58",
            RTMW: "332.23",
            RTPrice: "23.6"
        },
        {
            HE: "14",
            DAAwards: "324.1",
            DAPrice: "49.58",
            RTMW: "332.23",
            RTPrice: "23.6"
        }
        ]
    }
    goToDirections() {
        debugger;
        window.location = `geo:${this.lat},${this.lng};u=35`;
    }
    goMap() {
        this.navCtrl.navigateForward('/map');
    }
}