import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {EsriMapComponent} from '../esri-map/esri-map.component';
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "../shared/guard/auth.guard";

const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
    { path: 'f_stories', loadChildren: './story/story.module#StoryModule' },
    { path: 'h_stories', loadChildren: './story/story.module#StoryModule' },
    { path: 'map', loadChildren: './map/map.module#MapModule', canActivate: [AuthGuard]},
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'home', component: HomeComponent}
    // { path: 'map', loadChildren: './esri-map/esri-map.module#EsriMapModule' },
    // {path: 'map', loadChildren: './e'}
    // {path: 'info', loadChildren: './info/info.module#InfoModule'},
    // {path: 'user', loadChildren: './user/user.module#UserModule'},
    // {path: 'address', loadChildren: './address/address.module#AddressModule'},
    // {path: 'file-loading', loadChildren: './file-loading/file-loading.module#FileLoadingModule'}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
