import {Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver, ElementRef} from '@angular/core';
import {Story} from '../../../shared/models/story';
import {StoryService} from '../../../shared/services/story.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ErrorHandlerService} from '../../../shared/services/error-handler.service';
import {MdPaginator, PageEvent} from '@angular/material';
import {Page} from '../../../shared/models/page';
import {PagerService} from '../../../shared/services/pager.service';
import {PageNumerationComponent} from '../../page-numeration/page-numeration.component';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

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

  stories: Array<Story>;
  @ViewChild('filter') filter: ElementRef;
  pageAmount: number;
  pageEventStory: PageEvent;
  storiesCounter: number[];

  constructor(public router: Router, private storyService: StoryService, private route: ActivatedRoute,
              private errorService: ErrorHandlerService, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.storiesCounter = [2, 3, 5];
    if (this.router.url.match('/f_stories')) {
      const id = this.route.snapshot.params['id'];
      this.disableObjects();
      this.pageFStories = new Page();
      if (id) {
        const module = id % this.pageFStories.pageSize;
        this.pageFStories.currentPage = Math.ceil(id / this.pageFStories.pageSize);
        this.pageFStories.startIndex = module === 0 ? id - this.pageFStories.pageSize :
          this.pageFStories.currentPage * this.pageFStories.pageSize - this.pageFStories.pageSize;
        this.currentFPage = this.pageFStories.currentPage;
      } else {
        this.currentFPage = this.pageFStories.currentPage;
      }
      this.getFStories(this.pageFStories);
    } else {
      this.disableObjects();
      this.pageHStories = new Page();
      this.currentHPage = 1;
      this.getHStories(this.pageHStories);
    }
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        // if (!this.dataSource) { return; }
        // // this.dataSource.filter = this.filter.nativeElement.value;
        // this.handleTableParams(this.filter.nativeElement.value);
      });
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

  public handlePageAmount() {
    if (this.pageFStories) {
      this.pageFStories.pageSize = this.pageAmount;
      this.storyService.getFishingStories(this.pageFStories).subscribe(res => {
        this.stories = res.stories_list.map(story => Object.assign(new Story(), story));
        this.paginationHoldingFishingStories(res.count_stories);
      }, error => {
        this.openDialog(error);
      });
    } else {
      this.pageHStories.pageSize = this.pageAmount;
      this.storyService.getHunterStories(this.pageHStories).subscribe(res => {
        this.stories = res.stories_list.map(story => Object.assign(new Story(), story));
        this.paginationHoldingHunterStories(res.count_stories);
      }, error => {
        this.openDialog(error);
      });
    }
  }

  private disableObjects() {
    this.pageFStories = null;
    this.pageHStories = null;
    this.currentFPage = 0;
    this.currentHPage = 0;
  }
}
