/**
 * Created by AZagorskyi on 23.10.2017.
 */
import {UserStatisticsRoutingModule} from './user-statistics-routing.module';
import {NgModule} from '@angular/core';
import {FishingListComponent} from './fishing-list/fishing-list.component';
import {FishingPageComponent} from './fishing-page/fishing-page.component';
import {UserStatisticsComponent} from './user-statistics.component';
import {FishComponent} from './fishing-page/fish/fish.component';
import { HamletDescriptionComponent } from './hamlet-description/hamlet-description.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    UserStatisticsRoutingModule,
    SharedModule
  ],
  declarations: [UserStatisticsComponent,
    FishingPageComponent,
    FishingListComponent,
    FishComponent,
    HamletDescriptionComponent],
  entryComponents: [
    FishComponent
  ]
})
export class UserStatisticsModule {
}
