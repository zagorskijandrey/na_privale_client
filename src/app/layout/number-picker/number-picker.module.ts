/**
 * Created by AZagorskyi on 30.08.2017.
 */
import {NgModule} from '@angular/core';
import {NumberPickerComponent} from './number-picker.component';
import {NumberPickerService} from '../../shared/services/number-picker.service';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
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
