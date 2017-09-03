import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http, HttpModule, RequestOptions} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import 'hammerjs';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {StoryService} from './shared/services/story.service';
import {RegionService} from './shared/services/region.service';
import {AuthService} from './shared/services/auth.service';
import {AuthGuard} from './shared/guard/auth.guard';
import {AuthConfig, AuthHttp} from 'angular2-jwt';
import {ErrorHandlerService} from './shared/services/error-handler.service';
import {FishingPageService} from "./shared/services/fishing-page.service";
import {NumberPickerService} from "./shared/services/number-picker.service";

// hammerjs is a required import for some of the features in Angular Material

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
      headerName: 'Authorization',
      tokenName: 'token',
      tokenGetter: (() => localStorage.getItem('token')),
      noJwtError: false,
      globalHeaders: [
        {'Content-Type': 'application/json; charset=utf-8'},
        {'cache-control': 'no-cache'}
      ]
    }
  ), http, options);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [
    AuthGuard,
    AuthService,
    StoryService,
    RegionService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    ErrorHandlerService,
    FishingPageService,
    NumberPickerService
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
