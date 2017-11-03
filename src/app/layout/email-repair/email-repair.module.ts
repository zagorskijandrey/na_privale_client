/**
 * Created by AZagorskyi on 13.09.2017.
 */
import {EmailRepairComponent} from './email-repair.component';
import {EmailRepairRoutingModule} from './email-repair-routing.module';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MdInputModule, MdSlideToggleModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    MdInputModule,
    MdSlideToggleModule,
    EmailRepairRoutingModule
  ],
  declarations: [EmailRepairComponent]
})
export class EmailRepairModule {}
