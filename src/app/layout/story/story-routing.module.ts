import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StoryListComponent} from './story-list/story-list.component';
import {StoryDescribeComponent} from './story-describe/story-describe.component';

const routes: Routes = [
  {path: '', component: StoryListComponent },
  {path: 'describe', component: StoryDescribeComponent},
  {path: 'describe/:id', component: StoryDescribeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoryRoutingModule { }
