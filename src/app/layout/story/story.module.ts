import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryRoutingModule } from './story-routing.module';
import { StoryDescribeComponent } from './story-describe/story-describe.component';
import {StoryListComponent} from './story-list/story-list.component';
import {MdListModule, MdButtonModule, MdPaginatorModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    StoryRoutingModule,
    MdListModule,
    MdButtonModule,
    MdPaginatorModule
  ],
  declarations: [StoryListComponent, StoryDescribeComponent]
})
export class StoryModule { }
