import {NgModule} from '@angular/core';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {HeaderComponent} from '../shared/components/header/header.component';
import {TabGroupComponent} from '../shared/components/tab-group/tab-group.component';
import {HomeComponent} from './home/home.component';
import {DialogModule} from './dialog/dialog.module';
import {NumberPickerModule} from './number-picker/number-picker.module';
import {SnackbarModule} from './snackbar/snackbar.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    LayoutRoutingModule,
    DialogModule,
    NumberPickerModule,
    SnackbarModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    TabGroupComponent,
    HomeComponent
  ]
})
export class LayoutModule {
}
