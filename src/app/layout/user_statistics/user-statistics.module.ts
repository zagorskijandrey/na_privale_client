/**
 * Created by AZagorskyi on 23.10.2017.
 */
import {UserStatisticsRoutingModule} from './user-statistics-routing.module';
import {NgModule} from '@angular/core';
import {FishingListComponent} from './fishing-list/fishing-list.component';
import {UserStatisticsComponent} from './user-statistics.component';
import { HamletDescriptionComponent } from './hamlet-description/hamlet-description.component';
import {SharedModule} from '../../shared/shared.module';
import {FishingPageDescriberComponent} from "./fishing-page/fishing-page-describer/fishing-page-describer.component";
import {FishingPageCreatorComponent} from "./fishing-page/fishing-page-creator/fishing-page-creator.component";
import {FishComponent} from "./fishing-page/fishing-page-creator/fish/fish.component";



@NgModule({
  imports: [
    UserStatisticsRoutingModule,
    SharedModule
  ],
  declarations: [UserStatisticsComponent,
    FishingPageCreatorComponent,
    FishingListComponent,
    FishComponent,
    HamletDescriptionComponent,
    FishingPageDescriberComponent],
  entryComponents: [
    FishComponent
  ]
})
export class UserStatisticsModule {
}
