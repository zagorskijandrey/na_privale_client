import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public selectedTab: number;

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  choicePath() {
    if (this.selectedTab === 0) {
      this.router.navigate(['/story']);
    }
    if (this.selectedTab === 1) {
      this.router.navigate(['/story/describe']);
    }
    if (this.selectedTab === 2) {
      this.router.navigate(['/login']);
    }
  }
}
