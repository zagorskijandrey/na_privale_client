import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {FormsModule} from '@angular/forms';
import {MdInputModule, MdSlideToggleModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    MdInputModule,
    MdSlideToggleModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
