/**
 * Created by AZagorskyi on 23.10.2017.
 */
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FishingListComponent} from './fishing-list/fishing-list.component';

const routes: Routes = [
  {path: '', component: FishingListComponent },
  // {path: 'describe', component: StoryDescribeComponent },
  // {path: 'describe/:id', component: StoryDescribeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserStatisticsRoutingModule { }
