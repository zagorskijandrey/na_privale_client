/**
 * Created by AZagorskyi on 21.08.2017.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import {FormsModule} from '@angular/forms';
import {MdCheckboxModule, MdInputModule, MdSlideToggleModule} from '@angular/material';
import {SignupComponent} from './signup.component';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule,
    MdInputModule,
    MdSlideToggleModule,
    MdCheckboxModule
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
