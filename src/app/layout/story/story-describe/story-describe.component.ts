import { Component, OnInit } from '@angular/core';
import {Story} from '../../../shared/models/story';
import {StoryService} from '../../../shared/services/story.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-story-describe',
  templateUrl: './story-describe.component.html',
  styleUrls: ['./story-describe.component.css']
})
export class StoryDescribeComponent implements OnInit {
  public story: Story;

  constructor(private storyService: StoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.describeStory(id);
  }

  describeStory(id: number) {
    this.storyService.getFishingStory(id).subscribe(story => this.story = story);
  }
}
