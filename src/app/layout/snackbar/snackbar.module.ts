/**
 * Created by AZagorskyi on 12.09.2017.
 */
import {NgModule} from '@angular/core';
import {SnackbarComponent} from './snackbar.component';
import {SnackbarService} from '../../shared/services/snackbar.service';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    SnackbarComponent
  ],
  declarations: [
    SnackbarComponent
  ],
  providers: [
    SnackbarService
  ],
  entryComponents: [
    SnackbarComponent
  ],
})
export class SnackbarModule { }
