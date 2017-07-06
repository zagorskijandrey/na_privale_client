import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapPredictionComponent } from './map-prediction/map-prediction.component';
import {AgmCoreModule} from '@agm/core';
import {SharedPipesModule} from '../../shared/pipes/shared-pipes.module';

@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA2B2IySXd2d0EpRCT_7BwUwtlzf6Mp2cw'
    }),
    SharedPipesModule
  ],
  declarations: [MapPredictionComponent]
})
export class MapModule { }
