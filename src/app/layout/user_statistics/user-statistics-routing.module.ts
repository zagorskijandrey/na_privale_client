/**
 * Created by AZagorskyi on 23.10.2017.
 */
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FishingListComponent} from './fishing-list/fishing-list.component';
import {FishingPageComponent} from './fishing-page/fishing-page.component';
import {UserStatisticsComponent} from './user-statistics.component';

const routes: Routes = [{
  path: '', component: UserStatisticsComponent,
  children: [
    { path: '', component: FishingPageComponent},
    {path: 'page', component: FishingPageComponent},
    {path: 'fishing', component: FishingListComponent}
  ]
}
  // {path: '', component: UserStatisticsComponent },
  // {path: 'page', component: FishingPageComponent },
  // {path: 'fishing', component: FishingListComponent },
  // {path: 'describe', component: StoryDescribeComponent },
  // {path: 'describe/:id', component: StoryDescribeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserStatisticsRoutingModule {
}
