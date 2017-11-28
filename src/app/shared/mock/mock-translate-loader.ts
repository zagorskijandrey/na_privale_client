/**
 * Created by andrey on 28.11.2017.
 */
import {Observable} from "rxjs/Rx";
import {TranslateLoader} from "@ngx-translate/core";

export class MockTranslateLoader implements TranslateLoader {
  private translations: any;

  constructor(translations: any){
    this.translations = translations;
  }

  getTranslation(lang: string): Observable<any> {
    return Observable.of(this.translations);
  }
}
