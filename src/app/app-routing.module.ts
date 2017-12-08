import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: '', loadChildren: './layout/layout.module#LayoutModule'},
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
