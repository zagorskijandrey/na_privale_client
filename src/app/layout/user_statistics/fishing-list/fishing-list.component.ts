import {Component, OnInit, ViewChild} from '@angular/core';
import {MdPaginator} from '@angular/material';
import {FishingPage} from '../../../shared/models/fishing-page';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-fishing-list',
  templateUrl: './fishing-list.component.html',
  styleUrls: ['./fishing-list.component.css']
})
export class FishingListComponent implements OnInit {
  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  // exampleDatabase = new ExampleDatabase();
  fishings: FishingPage[] = [];
  dataSource: ExampleDataSource | null;

  @ViewChild(MdPaginator) paginator: MdPaginator;

  ngOnInit() {
    this.fishings = [{id: 1, region: 'Ivan', comment: '100', hamlet: 'red', province: '', fishes: [], date: new Date()}];
    this.dataSource = new ExampleDataSource(this.fishings, this.paginator);
  }
}

export class ExampleDataSource extends DataSource<any> {
  constructor(private fishings: FishingPage[], private _paginator: MdPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<FishingPage[]> {
    const displayDataChanges = [
      this.fishings,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this.fishings.slice();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}
}
