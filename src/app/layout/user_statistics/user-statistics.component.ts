/**
 * Created by AZagorskyi on 24.10.2017.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-statistics',
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.css']
})
export class UserStatisticsComponent implements OnInit {

  isClosedSidenav = false;

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.resizeElement();
  }

  protected resizeWindowWithSidenav() {
    this.resizeElement();
  }

  clickSidenav(sidenav: any) {
    if (!this.isClosedSidenav) {
      sidenav.open();
      this.isClosedSidenav = true;
    } else {
      sidenav.close();
      this.isClosedSidenav = false;
    }
  }

  private resizeElement() {
    const sidenavElement = document.getElementById('sidenav_id') as HTMLElement;
    const height = document.documentElement.offsetHeight - 109;
    sidenavElement.style.height = height + 'px';
  }

  choiceRouter() {
    this.router.navigate(['/map/fishing']);
  }
}
