/**
 * Created by AZagorskyi on 23.11.2017.
 */
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MdButtonModule, MdCardModule, MdCheckboxModule, MdCommonModule, MdDatepickerModule,
  MdDialogModule, MdFormFieldModule, MdIconModule, MdInputModule,
  MdListModule, MdMenuModule, MdNativeDateModule, MdPaginatorModule,
  MdSelectModule, MdSidenavModule, MdSlideToggleModule, MdSnackBarModule, MdSortModule,
  MdTableModule, MdTabsModule, MdToolbarModule
} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot(),
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
    MdInputModule,
    MdFormFieldModule,
    MdSelectModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSortModule,
    MdPaginatorModule,
    MdSidenavModule,
    FlexLayoutModule,
    FormsModule,
    MdSlideToggleModule,
    MdCheckboxModule,
    MdTableModule,
    BrowserAnimationsModule
  ],
  exports: [
    CommonModule,
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
    MdInputModule,
    MdFormFieldModule,
    MdSelectModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSortModule,
    MdPaginatorModule,
    MdSidenavModule,
    FlexLayoutModule,
    FormsModule,
    MdSlideToggleModule,
    MdCheckboxModule,
    MdTableModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule {
}
