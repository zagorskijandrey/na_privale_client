/**
 * Created by AZagorskyi on 03.10.2017.
 */
import * as _ from 'underscore';
import {Page} from '../models/page';

export class PagerService {
  getPager(page: Page/*totalElements: number, currentPage: number = 1, pageSize: number = 2*/) {
    // const page: Page = new Page();
    // page.totalElements = totalElements;
    // page.currentPage = currentPage;
    // page.pageSize = pageSize;
    // calculate total pages
    page.totalPages = Math.ceil(page.totalElements / page.pageSize);

    // let startPage: number, endPage: number;
    if (page.totalPages <= 10) {
      // less than 10 total pages so show all
      page.startPage = 1;
      page.endPage = page.totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (page.currentPage <= 6) {
        page.startPage = 1;
        page.endPage = 10;
      } else if (page.currentPage + 4 >= page.totalPages) {
        page.startPage = page.totalPages - 9;
        page.endPage = page.totalPages;
      } else {
        page.startPage = page.currentPage - 5;
        page.endPage = page.currentPage + 4;
      }
    }

    // calculate start and end item indexes
    page.startIndex = (page.currentPage - 1) * page.pageSize;
    page.endIndex = Math.min(page.startIndex + page.pageSize - 1, page.totalElements - 1);

    // create an array of pages to ng-repeat in the pager control
    page.pages = _.range(page.startPage, page.endPage + 1);

    // return object with all pager properties required by the view
    return page;
  }
}
