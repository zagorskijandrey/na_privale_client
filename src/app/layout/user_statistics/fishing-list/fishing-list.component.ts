import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MdPaginator, MdPaginatorIntl, MdSort, PageEvent} from '@angular/material';
import {FishingPage} from '../../../shared/models/fishing-page';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import {FishingPageService} from '../../../shared/services/fishing-page.service';

const russianRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length === 0 || pageSize === 0) { return `0 из ${length}`; }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;
  // If the start index exceeds the list length, do not try and fix the end index to the end.
  const endIndex = startIndex < length ?
    Math.min(startIndex + pageSize, length) :
    startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} из ${length}`;
};

@Component({
  selector: 'app-fishing-list',
  templateUrl: './fishing-list.component.html',
  styleUrls: ['./fishing-list.component.css']
})

export class FishingListComponent implements OnInit {
  displayedColumns = ['date', 'region', 'hamlet', 'comment'];
  fishings: FishingPage[] = [];
  dataSource: TableDataSource | null;
  countFishingPages = 0;

  @ViewChild('filter') filter: ElementRef;
  @ViewChild(MdSort) sort: MdSort;
  @ViewChild(MdPaginator) paginator: MdPaginator;
  pageEvent: PageEvent;

  constructor(private fishingPageService: FishingPageService, private  mdPaginatorIntl: MdPaginatorIntl) {
  }

  ngOnInit() {
    this.mdPaginatorIntl.itemsPerPageLabel = 'Всего на странице';
    this.mdPaginatorIntl.getRangeLabel = russianRangeLabel;
    this.mdPaginatorIntl.previousPageLabel = 'Предыдущая';
    this.mdPaginatorIntl.nextPageLabel = 'Следующая';
    this.fishingPageService.getFishingList(0, 2, null, 'desc').subscribe(res => {
      this.fishings = res.fishing_page_list.map(story => Object.assign(new FishingPage(), story));
      this.countFishingPages = res.count_fishing_pages;
      this.dataSource = new TableDataSource(this.fishings, this.paginator, this.sort);
    });
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        // this.dataSource.filter = this.filter.nativeElement.value;
        this.handleTableParams(this.filter.nativeElement.value);
      });
  }

  handleTableParams(filter: string) {
    this.fishingPageService
      .getFishingList((this.paginator.pageSize * this.paginator.pageIndex), this.paginator.pageSize, filter, this.sort.direction)
      .subscribe(res => {
      this.fishings = res.fishing_page_list.map(story => Object.assign(new FishingPage(), story));
      this.countFishingPages = res.count_fishing_pages;
      this.dataSource = new TableDataSource(this.fishings, this.paginator, this.sort);
    });
  }
}

export class TableDataSource extends DataSource<any> {
  constructor(private fishings: FishingPage[], private paginator: MdPaginator, private sort: MdSort) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<FishingPage[]> {
    const displayDataChanges = [
      this.fishings,
      this.paginator.page,
      this.sort.mdSortChange
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      // Grab the page's slice of data.
      // const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return this.fishings.slice();
    });
  }

  disconnect() {
    this.fishings = null;
  }
}
