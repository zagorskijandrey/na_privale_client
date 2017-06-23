import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {MdTabsModule, MdMenuTrigger, MdCardContent, MdButton} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;
  @ViewChild(MdTabsModule) tab: MdTabsModule;
  @ViewChild(MdCardContent) card: MdCardContent;
  @ViewChild(MdButton) button: MdButton;

  messages: any[] = [{
    face : 'imagePath',
    what: 'Brunch this weekend?',
    who: 'Min Li Chan',
    when: '3:08PM',
    notes: 'I\'ll be in your neighborhood doing errands'
  },
    {
      face : 'imagePath',
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: 'I\'ll be in your neighborhood doing errands'
    }];

  constructor() { }

  ngOnInit() {
  }

}
