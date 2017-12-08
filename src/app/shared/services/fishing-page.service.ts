/**
 * Created by AZagorskyi on 01.09.2017.
 */
import {Injectable} from '@angular/core';
import {ExtractService} from './extract.service';
import {FishingPage} from '../models/fishing-page';
import {AuthHttp} from 'angular2-jwt';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Http, Headers, URLSearchParams, RequestOptions, Response} from '@angular/http';

@Injectable()
export class FishingPageService extends ExtractService {

  constructor(protected authHttp: AuthHttp, protected router: Router, protected http: Http) {
    super(router);
  }
  
  public getFishingPage(id: number): Observable<any/*FishingPage*/> {
    return this.authHttp.get(environment.api + 'f_page?id=' + id)
      .map(this.getResponseBody.bind(this)/*this.getFishingPageWithResponse.bind(this)*/).catch(this.handleError.bind(this));
  }

  public saveFishingPage(fishingPage: FishingPage): Observable<FishingPage> {
    return this.authHttp.post(`${environment.api}f_page`, JSON.stringify(fishingPage))
      .map(this.getResponseBody.bind(this))
      .catch(this.handleError.bind(this));
  }

  public getFishingList(start: number, pageSize: number, filter: string, sort: string): Observable<any> {
    const fishingListHeaders = new Headers();
    fishingListHeaders.append('Content-Type', 'application/json');
    const params = new URLSearchParams();
    params.append('start', start.toString());
    params.append('total', pageSize.toString());
    params.append('filter', filter);
    params.append('sort', sort);
    const options = new RequestOptions({ headers: fishingListHeaders, params: params });

    return this.authHttp.get(environment.api + 'fishing', options)
      .map(this.getResponseBody.bind(this)).catch(this.handleError.bind(this));
  }

  public getHamletsDescription(id: number): Observable<Array<any>> {
    return this.authHttp.get(environment.api + 'hamlet_description?id=' + id)
      .map(this.getHamletsDescriptionWithResponse.bind(this)).catch(this.handleError.bind(this));
  }

  private getFishingPageWithResponse(res: Response): FishingPage {
    const body = this.getResponseBody(res).page;
    return Object.assign(new FishingPage, body);
  }

  private getHamletsDescriptionWithResponse(res: Response): Array<any> {
    return this.getResponseBody(res).hamlets_description;
  }
}
