/**
 * Created by AZagorskyi on 31.08.2017.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FishingPageComponent} from './fishing-page.component';
import {FishingPageRoutingModule} from './fishing-page-routing.module';
import {
  MdDatepickerModule, MdFormFieldModule, MdIconModule, MdInputModule, MdSelectModule, MdSidenavModule,
  MdToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {FishComponent} from './fish/fish.component';
import {TranslateModule} from '@ngx-translate/core';
// import {NumberPickerComponent} from '../number-picker/number-picker.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    MdInputModule,
    FishingPageRoutingModule,
    MdToolbarModule,
    MdFormFieldModule,
    MdSelectModule,
    MdDatepickerModule,
    MdIconModule,
    MdSidenavModule
  ],
  declarations: [FishingPageComponent, FishComponent],
  entryComponents: [
    FishComponent
  ]
})
export class FishingPageModule { }
