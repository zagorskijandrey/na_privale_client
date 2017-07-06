import {Component, Injectable, OnInit} from '@angular/core';
import {EsriLoaderService} from 'angular-esri-loader';
import Collection = __esri.Collection;
// import {Graphic} from 'esri/Graphic';
// import GraphicsLayer from 'esri/layers/GraphicsLayer';
// import Collection  from 'esri/core/Collection';
// import Point from 'esri/geometry/Point';

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})
@Injectable()
export class EsriMapComponent implements OnInit {
  points: Collection = new Collection();
  pointsLayer: __esri.GraphicsLayer;
  pointGraphic: __esri.Graphic;
  // point: __esri.Point;

  webMapProperties: __esri.WebMapProperties = {
    portalItem: {
      id: 'ad5759bf407c4554b748356ebe1886e5'
    }
  };
  mapViewProperties: __esri.MapViewProperties = {
    zoom: 25
  };
  map: __esri.Map;
  mapView: __esri.MapView;

  constructor(private esriLoader: EsriLoaderService) {
    // this.point.x = 34;
    // this.point.set('longitude', 44);
    // this.points.add(this.point);
    // this.pointsLayer.graphics;
    // this.points = this.pointsLayer;
    // this.point.longitude = 44;
    // this.pointGraphic.setAttribute('geometry', this.point);
    // this.map.basemap.baseLayers;
    // this.map.add(this.pointsLayer);
  }

  ngOnInit() {
    // this.addPoints([this.pointGraphic, this.pointGraphic]);
    // this.point.latitude = 34;
    // this.point.longitude = 44;
    // const poinst = {latitude: 34, longitude: 44};
    // this.point.set(poinst);
    // this.points.add(this.point);
  }

  onMapInit(mapInfo: {map: __esri.Map, mapView: __esri.MapView}) {
    this.map = mapInfo.map;
    this.mapView = mapInfo.mapView;
  }

  addPoints(pointsGraphics: __esri.Graphic[]) {
    this.points.addMany(pointsGraphics);
  }
}
