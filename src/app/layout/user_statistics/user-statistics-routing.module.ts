/**
 * Created by AZagorskyi on 23.10.2017.
 */
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FishingListComponent} from './fishing-list/fishing-list.component';
import {UserStatisticsComponent} from './user-statistics.component';
import {HamletDescriptionComponent} from './hamlet-description/hamlet-description.component';
import {FishingPageDescriberComponent} from "./fishing-page/fishing-page-describer/fishing-page-describer.component";
import {FishingPageCreatorComponent} from "./fishing-page/fishing-page-creator/fishing-page-creator.component";
import {AuthGuard} from "../../shared/guard/auth.guard";

const routes:Routes = [{
  path: '', component: UserStatisticsComponent,
  children: [
    {path: '', component: FishingPageCreatorComponent},
    {path: 'cr_page', component: FishingPageCreatorComponent},
    {path: 'fishing', component: FishingListComponent, canActivate: [AuthGuard]},
    {path: 'ds_page', component: FishingPageDescriberComponent, canActivate: [AuthGuard]},
    {path: 'ds_page/:id', component: FishingPageDescriberComponent, canActivate: [AuthGuard]},
    {path: 'hamlet_description', component: HamletDescriptionComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserStatisticsRoutingModule {
}
