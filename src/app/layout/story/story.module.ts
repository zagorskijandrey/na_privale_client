import { NgModule } from '@angular/core';
import { StoryRoutingModule } from './story-routing.module';
import { StoryDescribeComponent } from './story-describe/story-describe.component';
import {StoryListComponent} from './story-list/story-list.component';
import {PageNumerationComponent} from '../page-numeration/page-numeration.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    StoryRoutingModule,
    SharedModule
  ],
  declarations: [StoryListComponent, StoryDescribeComponent, PageNumerationComponent],
  entryComponents: [PageNumerationComponent]
})
export class StoryModule { }
