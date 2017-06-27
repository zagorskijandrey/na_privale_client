import { Component, OnInit } from '@angular/core';
import {Story} from '../../../shared/models/story';
import {StoryService} from '../../../shared/services/story.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  stories: Array<Story>;
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

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.storyService.getFishingStories().subscribe(story => Object.assign(new Story, story));
  }

}
