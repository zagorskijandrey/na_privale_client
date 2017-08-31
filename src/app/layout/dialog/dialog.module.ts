import {NgModule} from '@angular/core';
import {DialogComponent} from './dialog.component';
import {ErrorHandlerService} from '../../shared/services/error-handler.service';
import {MdDialogActions, MdDialogContent} from "@angular/material";
/**
 * Created by AZagorskyi on 30.08.2017.
 */
@NgModule({
  imports: [
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
