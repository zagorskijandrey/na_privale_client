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

  private pageFStories: Page;
  private pageHStories: Page;
  private currentFPage: number;
  private currentHPage: number;

  length = 100;
  pageSize = 2;
  pageSizeOptions = [1, 2, 5, 10];

  stories: Array<Story>;

  constructor(public router: Router, private storyService: StoryService,
              private errorService: ErrorHandlerService, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    if (this.router.url.match('/f_stories')) {
      this.disableObjects();
      this.pageFStories = new Page();
      this.currentFPage = 1;
      this.getFStories(this.pageFStories);
    } else {
      this.disableObjects();
      this.pageHStories = new Page();
      this.currentHPage = 1;
      this. getHStories(this.pageHStories);
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
      this.paginationHoldingFishingStories(res.count_stories);
    }, error => {
      this.openDialog(error);
    });
  }

  private getHStories(page: Page) {
    if (page.currentPage === 0) {
      page.currentPage = 1;
    }
    this.storyService.getHunterStories(page).subscribe(res => {
      this.stories = res.stories_list.map(story => Object.assign(new Story(), story));
      this.paginationHoldingHunterStories(res.count_stories);
    }, error => {
      this.openDialog(error);
    });
  }

  private paginationHoldingFishingStories(totalElements: number) {
    this.dynamicComponentContainerPagination.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(PageNumerationComponent);
    const ref = this.dynamicComponentContainerPagination.createComponent(factory);
    this.pageFStories.totalElements = totalElements;
    ref.instance.page = this.pageFStories;
    ref.instance.change.subscribe(page => {
      if (this.currentFPage !== page.currentPage) {
        this.getFStories(page);
        this.pageFStories = page;
        this.currentFPage = page.currentPage;
      }
    });
    ref.changeDetectorRef.detectChanges();
  }

  private paginationHoldingHunterStories(totalElements: number) {
    this.dynamicComponentContainerPagination.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(PageNumerationComponent);
    const ref = this.dynamicComponentContainerPagination.createComponent(factory);
    this.pageHStories.totalElements = totalElements;
    ref.instance.page = this.pageHStories;
    ref.instance.change.subscribe(page => {
      if (this.currentHPage !== page.currentPage) {
        this.getHStories(page);
        this.pageHStories = page;
        this.currentHPage = page.currentPage;
      }
    });
    ref.changeDetectorRef.detectChanges();
  }

  private disableObjects(){
    this.pageFStories = null;
    this.pageHStories = null;
    this.currentFPage = 0;
    this.currentHPage = 0;
  }
}
