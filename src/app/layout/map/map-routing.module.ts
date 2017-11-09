import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapPredictionComponent } from './map-prediction/map-prediction.component';
import {FishingMapComponent} from './fishing-map/fishing-map.component';

const routes: Routes = [
  {path: '', component: MapPredictionComponent },
  {path: 'fishing', component: FishingMapComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
