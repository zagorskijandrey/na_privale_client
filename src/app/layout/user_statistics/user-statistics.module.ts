/**
 * Created by AZagorskyi on 23.10.2017.
 */
import {UserStatisticsRoutingModule} from './user-statistics-routing.module';
import {CommonModule} from '@angular/common';
import {
  MdButtonModule, MdDatepickerModule, MdFormFieldModule, MdIconModule, MdInputModule, MdListModule, MdPaginatorModule,
  MdSelectModule,
  MdTableModule,
  MdToolbarModule, MdSidenavModule, MdSortModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgModule} from '@angular/core';
import {FishingListComponent} from './fishing-list/fishing-list.component';
import {FishingPageComponent} from './fishing-page/fishing-page.component';
import {UserStatisticsComponent} from './user-statistics.component';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {FishComponent} from './fishing-page/fish/fish.component';
import {FishingMapComponent} from '../map/fishing-map/fishing-map.component';

@NgModule({
  imports: [
    CommonModule,
    UserStatisticsRoutingModule,
    MdListModule,
    MdButtonModule,
    FlexLayoutModule,
    MdTableModule,
    MdPaginatorModule,
    TranslateModule,
    FormsModule,
    MdInputModule,
    MdToolbarModule,
    MdFormFieldModule,
    MdSelectModule,
    MdDatepickerModule,
    MdIconModule,
    MdSidenavModule,
    MdSortModule
  ],
  declarations: [UserStatisticsComponent,
    FishingPageComponent,
    FishingListComponent,
    FishComponent],
  entryComponents: [
    FishComponent
  ]
})
export class UserStatisticsModule {
}
