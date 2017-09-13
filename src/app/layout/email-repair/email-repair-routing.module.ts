/**
 * Created by AZagorskyi on 13.09.2017.
 */
import {RouterModule, Routes} from '@angular/router';
import {EmailRepairComponent} from './email-repair.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', component: EmailRepairComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRepairRoutingModule { }
