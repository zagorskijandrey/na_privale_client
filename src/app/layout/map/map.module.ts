import { NgModule } from '@angular/core';
import { MapRoutingModule } from './map-routing.module';
import { MapPredictionComponent } from './map-prediction/map-prediction.component';
import {AgmCoreModule} from '@agm/core';
import {SharedPipesModule} from '../../shared/pipes/shared-pipes.module';
import {FishingMapComponent} from './fishing-map/fishing-map.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    MapRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA2B2IySXd2d0EpRCT_7BwUwtlzf6Mp2cw'
    }),
    SharedPipesModule,
    SharedModule
  ],
  declarations: [MapPredictionComponent, FishingMapComponent]
})
export class MapModule { }
