import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FishingPageComponent} from './fishing-page.component';
import {FishingPageRoutingModule} from './fishing-page-routing.module';
import {MdDatepickerModule, MdFormFieldModule, MdInputModule, MdSelectModule, MdToolbarModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
/**
 * Created by AZagorskyi on 31.08.2017.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdInputModule,
    FishingPageRoutingModule,
    MdToolbarModule,
    MdFormFieldModule,
    MdSelectModule,
    MdDatepickerModule
  ],
  declarations: [FishingPageComponent]
})
export class FishingPageModule { }
