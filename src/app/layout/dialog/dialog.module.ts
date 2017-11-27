/**
 * Created by AZagorskyi on 30.08.2017.
 */
import {NgModule} from '@angular/core';
import {DialogComponent} from './dialog.component';
import {ErrorHandlerService} from '../../shared/services/error-handler.service';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    DialogComponent
  ],
  declarations: [
    DialogComponent
  ],
  providers: [
    ErrorHandlerService
  ],
  entryComponents: [
    DialogComponent
  ],
})
export class DialogModule { }
