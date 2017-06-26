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

  getFishingStory(id: number): Observable<Story> {
    return this.http.get(environment.api + 'fishingStory?id=' + id).map(this.getStoryWithResponse).catch(this.handleError);
}

  getHunterStory(id: number): Observable<Story> {
    return this.http.get(environment.api + 'fishHunterStory?id=' + id).map(this.getStoryWithResponse).catch(this.handleError);
  }

  private getStoryWithResponse(res: Response): Story {
    return this.getResponseBody(res);
  }
}
