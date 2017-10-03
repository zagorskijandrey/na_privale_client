/**
 * Created by AZagorskyi on 26.06.2017.
 */
import {Injectable} from '@angular/core';
import {Story} from '../models/story';
import {Http, Response, RequestOptions} from '@angular/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ExtractService} from './extract.service';
import {Router} from '@angular/router';
import {Page} from '../models/page';

@Injectable()
export class StoryService extends ExtractService {
  constructor(protected http: Http, protected router: Router) {
    super(router);
  }

  getFishingStories(page: Page): Observable<any> {
    const searchParams = new URLSearchParams();
    searchParams.set('page_params', JSON.stringify(page));
    const options = new RequestOptions({params: searchParams});

    return this.http.get(environment.api + 'f_stories?start=' + page.currentPage + '&total=' + page.pageSize)
      .map(this.getResponseBody.bind(this)).catch(this.handleError.bind(this));
  }

  getFishingStory(id: number): Observable<Story> {
    return this.http.get(environment.api + 'fishingStory?id=' + id)
      .map(this.getStoryWithResponse.bind(this)).catch(this.handleError.bind(this));
  }

  getHunterStories(): Observable<Array<Story>> {
    return this.http.get(environment.api + 'h_stories')
      .map(this.getStoriesWithResponse.bind(this)).catch(this.handleError.bind(this));
  }

  getHunterStory(id: number): Observable<Story> {
    return this.http.get(environment.api + 'fishHunterStory?id=' + id)
      .map(this.getStoryWithResponse.bind(this)).catch(this.handleError.bind(this));
  }

  private getStoryWithResponse(res: Response): Story {
    const body = this.getResponseBody(res).story;
    return Object.assign(new Story, body);
  }

  private getStoriesWithResponse(res: Response): Array<Story> {
    const body = this.getResponseBody(res).stories;
    const arrayStory = new Array<Story>();
    for (let i = 0; i < body.length; i++) {
      arrayStory.push(Object.assign(new Story(), body[i]));
    }
    return arrayStory;
  }
}
