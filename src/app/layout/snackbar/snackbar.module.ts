/**
 * Created by AZagorskyi on 12.09.2017.
 */
import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {SnackbarComponent} from './snackbar.component';
import {SnackbarService} from '../../shared/services/snackbar.service';

@NgModule({
  imports: [
    TranslateModule
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
