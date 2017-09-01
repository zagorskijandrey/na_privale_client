/**
 * Created by AZagorskyi on 31.08.2017.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FishingPageComponent} from './fishing-page.component';
import {FishingPageRoutingModule} from './fishing-page-routing.module';
import {
  MdDatepickerModule, MdFormFieldModule, MdIconModule, MdInputModule, MdSelectModule,
  MdToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {FishComponent} from './fish/fish.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdInputModule,
    FishingPageRoutingModule,
    MdToolbarModule,
    MdFormFieldModule,
    MdSelectModule,
    MdDatepickerModule,
    MdIconModule
  ],
  declarations: [FishingPageComponent, FishComponent],
  entryComponents: [
    FishComponent
  ]
})
export class FishingPageModule { }
