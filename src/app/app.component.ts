import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDialog: Boolean = false;
  constructor(private translate: TranslateService) {
      translate.addLangs(['ua', 'ru', 'en']);
      translate.setDefaultLang('ru');
      translate.use('ru');
  }
}
