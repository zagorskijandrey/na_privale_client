import {Component, OnInit} from '@angular/core';
import {Story} from '../../../shared/models/story';
import {StoryService} from '../../../shared/services/story.service';
import {Router} from '@angular/router';
import {ErrorHandlerService} from '../../../shared/services/error-handler.service';
import {PageEvent} from '@angular/material';
import {Page} from '../../../shared/models/page';
import {PagerService} from '../../../shared/services/pager.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  pageEvent: PageEvent;

  page: Page;

  length = 100;
  pageSize = 2;
  pageSizeOptions = [1, 2, 5, 10];

  stories: Array<Story>;

  constructor(public router: Router, private storyService: StoryService, private errorService: ErrorHandlerService,
              private pagerService: PagerService) {
    this.page = new Page();
  }

  ngOnInit() {
    if (this.router.url.match('/f_stories')) {
      this.storyService.getFishingStories(this.page).subscribe(res => {
        this.stories = res.stories_list.map(story => Object.assign(new Story(), story));
        this.page.totalElements = res.count_stories;
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
