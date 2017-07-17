/**
 * Created by AZagorskyi on 26.06.2017.
 */
import {Injectable} from '@angular/core';
import {Story} from '../models/story';
import {Http, Response} from '@angular/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ExtractService} from './extract.service';

@Injectable()
export class StoryService extends ExtractService {
  constructor(protected http: Http) {
    super();
  }

  getFishingStories(): Observable<Array<Story>> {
    return this.http.get(environment.api + 'f_stories').map(this.getStoriesWithResponse.bind(this)).catch(this.handleError.bind(this));
  }

  getFishingStory(id: number): Observable<Story> {
    return this.http.get(environment.api + 'fishingStory?id=' + id).map(this.getStoryWithResponse.bind(this)).catch(this.handleError.bind(this));
  }

  getHunterStories(): Observable<Array<Story>> {
    return this.http.get(environment.api + 'h_stories').map(this.getStoriesWithResponse.bind(this)).catch(this.handleError.bind(this));
  }

  getHunterStory(id: number): Observable<Story> {
    return this.http.get(environment.api + 'fishHunterStory?id=' + id).map(this.getStoryWithResponse.bind(this)).catch(this.handleError.bind(this));
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
