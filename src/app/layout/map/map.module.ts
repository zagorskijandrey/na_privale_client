import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapPredictionComponent } from './map-prediction/map-prediction.component';
import {AgmCoreModule} from '@agm/core';
import {SharedPipesModule} from '../../shared/pipes/shared-pipes.module';
import {FishingMapComponent} from './fishing-map/fishing-map.component';
import {MdCardModule, MdSidenavModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA2B2IySXd2d0EpRCT_7BwUwtlzf6Mp2cw'
    }),
    SharedPipesModule,
    MdSidenavModule,
    FlexLayoutModule,
    MdCardModule
  ],
  declarations: [MapPredictionComponent, FishingMapComponent]
})
export class MapModule { }
