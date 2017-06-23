import { Component, OnInit} from '@angular/core';
import {MdTabNav} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [MdTabNav]
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
