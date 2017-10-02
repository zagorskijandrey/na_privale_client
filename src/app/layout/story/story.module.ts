import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryRoutingModule } from './story-routing.module';
import { StoryDescribeComponent } from './story-describe/story-describe.component';
import {StoryListComponent} from './story-list/story-list.component';
import {MdListModule, MdButtonModule} from '@angular/material';
import {PageNumerationComponent} from '../page-numeration/page-numeration.component';

@NgModule({
  imports: [
    CommonModule,
    StoryRoutingModule,
    MdListModule,
    MdButtonModule
  ],
  declarations: [StoryListComponent, StoryDescribeComponent, PageNumerationComponent]
})
export class StoryModule { }
