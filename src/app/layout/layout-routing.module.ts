import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from '../shared/guard/auth.guard';

const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'f_stories', loadChildren: './story/story.module#StoryModule' },
    { path: 'h_stories', loadChildren: './story/story.module#StoryModule' },
    { path: 'map', loadChildren: './map/map.module#MapModule', canActivate: [AuthGuard]},
    { path: 'signin', loadChildren: './signin/signin.module#SigninModule' },
    { path: 'email_repair', loadChildren: './email-repair/email-repair.module#EmailRepairModule'},
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'page', loadChildren: './fishing-page/fishing-page.module#FishingPageModule', canActivate: [AuthGuard]}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
