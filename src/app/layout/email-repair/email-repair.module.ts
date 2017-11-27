/**
 * Created by AZagorskyi on 13.09.2017.
 */
import {EmailRepairComponent} from './email-repair.component';
import {EmailRepairRoutingModule} from './email-repair-routing.module';
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    EmailRepairRoutingModule
  ],
  declarations: [EmailRepairComponent]
})
export class EmailRepairModule {}
