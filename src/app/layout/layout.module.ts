import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {TranslateModule} from '@ngx-translate/core';
import {HeaderComponent} from '../shared/components/header/header.component';
import {TabGroupComponent} from '../shared/components/tab-group/tab-group.component';
import {HomeComponent} from './home/home.component';
import {
  MdButtonModule, MdCardModule, MdCommonModule, MdDatepickerModule, MdDialogModule,
  MdFormFieldModule, MdIconModule, MdInputModule, MdSnackBarModule, MdListModule,
  MdMenuModule, MdNativeDateModule, MdSelectModule, MdTabsModule, MdToolbarModule, MdSortModule, MdPaginatorIntl,
  MdPaginatorModule
} from '@angular/material';
import {DialogModule} from './dialog/dialog.module';
import {NumberPickerModule} from './number-picker/number-picker.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SnackbarModule} from './snackbar/snackbar.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    TranslateModule,
    MdTabsModule,
    MdMenuModule,
    MdCardModule,
    MdIconModule,
    MdCommonModule,
    MdToolbarModule,
    MdListModule,
    MdButtonModule,
    MdDialogModule,
    MdSnackBarModule,
    DialogModule,
    MdInputModule,
    MdFormFieldModule,
    MdSelectModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSortModule,
    MdPaginatorModule,
    NumberPickerModule,
    FlexLayoutModule,
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
