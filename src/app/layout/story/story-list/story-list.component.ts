import {Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver} from '@angular/core';
import {Story} from '../../../shared/models/story';
import {StoryService} from '../../../shared/services/story.service';
import {Router} from '@angular/router';
import {ErrorHandlerService} from '../../../shared/services/error-handler.service';
import {PageEvent} from '@angular/material';
import {Page} from '../../../shared/models/page';
import {PagerService} from '../../../shared/services/pager.service';
import {PageNumerationComponent} from '../../page-numeration/page-numeration.component';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  pageEvent: PageEvent;

  @ViewChild('dynamicComponentContainerPagination', {read: ViewContainerRef}) dynamicComponentContainerPagination: ViewContainerRef;

  page: Page;
  totalElements: number;

  length = 100;
  pageSize = 2;
  pageSizeOptions = [1, 2, 5, 10];

  stories: Array<Story>;

  constructor(public router: Router, private storyService: StoryService,
              private errorService: ErrorHandlerService, private componentFactoryResolver: ComponentFactoryResolver) {
    this.page = new Page();
  }

  ngOnInit() {
    if (this.router.url.match('/f_stories')) {
      this.getFStories(this.page);
      // this.storyService.getFishingStories(this.page).subscribe(res => {
      //   this.stories = res.stories_list.map(story => Object.assign(new Story(), story));
      //   this.totalElements = res.count_stories;
      // }, error => {
      //   this.openDialog(error);
      // });
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

  private getFStories(page: Page) {
    if (page.currentPage === 0) {
      page.currentPage = 1;
    }
    this.storyService.getFishingStories(page).subscribe(res => {
      this.stories = res.stories_list.map(story => Object.assign(new Story(), story));
      this.paginationHolding(res.count_stories);
    }, error => {
      this.openDialog(error);
    });
  }

  private paginationHolding(totalElements: number) {
    this.dynamicComponentContainerPagination.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(PageNumerationComponent);
    const ref = this.dynamicComponentContainerPagination.createComponent(factory);
    ref.instance.totalElements = totalElements;
    ref.instance.change.subscribe(page => {
      if (this.page.currentPage !== page.currentPage) {
        this.getFStories(page);
      }
    });
    ref.changeDetectorRef.detectChanges();
  }
}
