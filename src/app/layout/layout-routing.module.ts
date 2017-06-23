import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';

const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
    {path: 'story', loadChildren: './story/story.module#StoryModule'}
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