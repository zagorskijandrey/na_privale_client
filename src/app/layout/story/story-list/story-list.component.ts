import {Component, OnInit} from '@angular/core';
import {Story} from '../../../shared/models/story';
import {StoryService} from '../../../shared/services/story.service';
import {Router} from '@angular/router';
import {ErrorHandlerService} from '../../../shared/services/error-handler.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  stories: Array<Story>;
  constructor(public router: Router, private storyService: StoryService, private errorService: ErrorHandlerService) {
  }

  ngOnInit() {
    if (this.router.url.match('/f_stories')) {
      this.storyService.getFishingStories().subscribe(story => {
        this.stories = story;
      }, error => {
        this.openDialog(error);
      });
    } else {
      this.storyService.getHunterStories().subscribe(story => {
        this.stories = story;
      }, error => {
        this.openDialog(error);
      });
    }
  }

  private openDialog(error) {
    this.errorService
      .confirm('Ошибка сервиса:', error)
      .subscribe(res => res);
  }
}
