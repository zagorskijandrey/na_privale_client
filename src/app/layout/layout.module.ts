import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {TranslateModule} from '@ngx-translate/core';
import {HeaderComponent} from '../shared/components/header/header.component';
import {TabGroupComponent} from '../shared/components/tab-group/tab-group.component';
import { HomeComponent } from './home/home.component';
import {
  MdButtonModule, MdCardModule, MdCommonModule, MdIconModule, MdListModule, MdMenuModule,
  MdTabsModule, MdToolbarModule
} from '@angular/material';

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
    MdButtonModule
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
