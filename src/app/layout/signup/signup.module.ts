/**
 * Created by AZagorskyi on 21.08.2017.
 */
import { NgModule } from '@angular/core';
import { SignupRoutingModule } from './signup-routing.module';
import {SignupComponent} from './signup.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    SignupRoutingModule,
    SharedModule
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
