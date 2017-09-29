/**
 * Created by AZagorskyi on 29.09.2017.
 */
export class Page {
  constructor(public size: number = 2,
              public totalElements: number = 0,
              public totalPages: number = 0,
              public pageNumber: number = 0,
              /*public sorts?: SearchField[],
              public filters?: SearchFieldMulti[],
              public range_filters?: SearchFieldRange[],
              public search?: SearchField[]*/) {
  }

}
