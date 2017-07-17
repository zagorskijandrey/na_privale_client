/**
 * Created by andrey on 17.07.2017.
 */
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css']
})
export class TabGroupComponent implements OnInit {

  public selectedTab: number;
  constructor(public router: Router) { }

  ngOnInit() {
  }

  choicePath() {
    if (this.selectedTab === 0) {
      this.router.navigate(['/f_stories']);
    }
    if (this.selectedTab === 1) {
      this.router.navigate(['/h_stories']);
    }
    if (this.selectedTab === 2) {
      this.router.navigate(['/login']);
    }
  }
}
