import {Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver, ElementRef} from '@angular/core';
import {Story} from '../../../shared/models/story';
import {StoryService} from '../../../shared/services/story.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ErrorHandlerService} from '../../../shared/services/error-handler.service';
import {Page} from '../../../shared/models/page';
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
  @ViewChild('dynamicComponentContainerPagination', {read: ViewContainerRef}) dynamicComponentContainerPagination: ViewContainerRef;

  private pageFStories: Page;
  private pageHStories: Page;
  private currentPage: number;

  stories: Array<Story>;
  @ViewChild('filter') filter: ElementRef;
  pageAmount: number;
  storiesCounter: number[];
  previousPage = {isActive: false, count: 1};

  constructor(public router: Router, private storyService: StoryService, private route: ActivatedRoute,
              private errorService: ErrorHandlerService, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.storiesCounter = [2, 3, 5];
    const id = this.route.snapshot.params['id'];
    if (this.router.url.match('/f_stories')) {
      this.disableObjects();
      this.pageFStories = new Page();
      this.getFStories(this.pagination(this.pageFStories, id));
    } else {
      this.disableObjects();
      this.pageHStories = new Page();
      this.getHStories(this.pagination(this.pageHStories, id));
    }
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(50)
      .distinctUntilChanged()
      .subscribe(() => {
        if (this.pageFStories) {
          this.setFilterParameters(this.pageFStories, this.filter.nativeElement.value);
        } else {
          this.setFilterParameters(this.pageHStories, this.filter.nativeElement.value);
        }
      });
  }

  private pagination(page: Page, id: number) {
    this.pageAmount = page.pageSize;
    if (id) {
      const module = id % page.pageSize;
      page.currentPage = Math.ceil(id / page.pageSize);
      page.startIndex = module === 0 ? id - page.pageSize :
        page.currentPage * page.pageSize - page.pageSize;
      this.currentPage = page.currentPage;
    } else {
      this.currentPage = page.currentPage;
    }
    return page;
  }

  private setFilterParameters(page: Page, filter: string) {
    if (!this.previousPage.isActive) {
      this.previousPage.isActive = true;
      this.previousPage.count = page.currentPage;
    } else {
      page.currentPage = 1;
    }
    if (!filter) {
      this.previousPage.isActive = false;
      page.currentPage = this.previousPage.count;
    }
    page.filter = filter;
    this.handlePageAmount();
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
      if (this.currentPage !== page.currentPage) {
        this.getFStories(page);
        this.pageFStories = page;
        this.currentPage = page.currentPage;
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
      if (this.currentPage !== page.currentPage) {
        this.getHStories(page);
        this.pageHStories = page;
        this.currentPage = page.currentPage;
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
    this.previousPage.isActive = false;
    this.previousPage.count = 1;
    this.currentPage = 0;
  }
}
