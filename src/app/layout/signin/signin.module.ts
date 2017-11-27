import { NgModule } from '@angular/core';
import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SigninRoutingModule,
    SharedModule
  ],
  declarations: [SigninComponent]
})
export class SigninModule { }
