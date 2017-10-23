/**
 * Created by AZagorskyi on 23.10.2017.
 */
import {UserStatisticsRoutingModule} from './user-statistics-routing.module';
import {CommonModule} from '@angular/common';
import {MdButtonModule, MdListModule, MdPaginatorModule, MdTableModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgModule} from '@angular/core';
import {FishingListComponent} from './fishing-list/fishing-list.component';

@NgModule({
  imports: [
    CommonModule,
    UserStatisticsRoutingModule,
    MdListModule,
    MdButtonModule,
    FlexLayoutModule,
    MdTableModule,
    MdPaginatorModule
  ],
  declarations: [FishingListComponent]
})
export class UserStatisticsModule { }
