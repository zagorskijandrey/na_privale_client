import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapPredictionComponent } from './map-prediction/map-prediction.component';

const routes: Routes = [
  {path: '', component: MapPredictionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
