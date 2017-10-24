/**
 * Created by AZagorskyi on 31.08.2017.
 */
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FishingPageComponent} from './fishing-page.component';

const routes: Routes = [
  // {path: '', component: FishingPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FishingPageRoutingModule { }
