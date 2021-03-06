/**
 * Created by andrey on 02.10.2017.
 */
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Page} from '../../shared/models/page';
import {PagerService} from '../../shared/services/pager.service';

@Component({
  selector: 'app-page-numeration',
  templateUrl: './page-numeration.component.html',
  styleUrls: ['./page-numeration.component.css']
})
export class PageNumerationComponent implements OnInit {

  public page: Page;
  @Output() change: EventEmitter<Page> = new EventEmitter<Page>();
  isActive = false;

  constructor(private pagerService: PagerService) {
  }

  ngOnInit() {
    this.setPage(this.page.currentPage);
  }

  setPage(page: number) {
    if (page < 1 /*|| page > this.page.totalPages*/) {
      return;
    }
    this.isActive = true;
    this.page.currentPage = page;

    // get pager object from service
    this.page = this.pagerService.getPager(this.page);
    this.change.emit(this.page);

    // get current page of items
    // this.pagedItems = this.allItems.slice(this.page.startIndex, this.page.endIndex + 1);
  }

}
