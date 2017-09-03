import {NgModule} from '@angular/core';
import {MdCardModule} from "@angular/material";
import {NumberPickerComponent} from "./number-picker.component";
import {NumberPickerService} from "../../shared/services/number-picker.service";
/**
 * Created by AZagorskyi on 30.08.2017.
 */
@NgModule({
  imports: [
    MdCardModule
  ],
  exports: [
    NumberPickerComponent
  ],
  declarations: [
    NumberPickerComponent
  ],
  providers: [
    NumberPickerService
  ],
  entryComponents: [
    NumberPickerComponent
  ],
})
export class NumberPickerModule { }
