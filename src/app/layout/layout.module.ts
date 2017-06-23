import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {TranslateModule} from '@ngx-translate/core';
import {HeaderComponent} from '../shared/components/header/header.component';
import {
  MdButtonModule, MdCardModule, MdCommonModule, MdIconModule, MdListItem, MdListModule, MdMenuModule, MdTabNav,
  MdTabsModule, MdToolbarModule
} from '@angular/material';
import {StoryListComponent} from './story/story-list/story-list.component';
import {StoryModule} from './story/story.module';

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
    MdButtonModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent
  ]
})
export class LayoutModule {
}