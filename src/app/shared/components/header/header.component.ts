import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService, private authService: AuthService) {
  }

  ngOnInit() {
  }

  endUserSession() {
    this.authService.logout();
    this.authService.navigateToHomePage();
  }

  changeLang(language: string) {
    this.translate.use(language);
  }
}
