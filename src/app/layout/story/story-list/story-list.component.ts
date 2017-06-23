import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {

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
