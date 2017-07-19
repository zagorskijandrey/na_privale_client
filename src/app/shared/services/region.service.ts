/**
 * Created by AZagorskyi on 03.07.2017.
 */
import {Injectable} from '@angular/core';
import {ExtractService} from './extract.service';
import {Response} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import {Observable} from 'rxjs/Observable';
import {Region} from '../models/region';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RegionService extends ExtractService {
  constructor(protected authHttp: AuthHttp) {
    super();
  }

  getRegions(): Observable<Array<Region>> {
    const headers = new Headers();
    // headers.append('token', sessionStorage.getItem('token'));
    const ob = new Array<Object>();
    ob.push('token');
    this.authHttp.setGlobalHeaders(ob, sessionStorage.getItem('token'));
    return this.authHttp.get(environment.api + 'mapFishingPrediction')
      .map(this.getRegionsWithResponse.bind(this)).catch(this.handleError.bind(this));
  }

  private getRegionsWithResponse(res: Response): Array<Region> {
    const body = this.getResponseBody(res).regions;
    const arrayRegion = new Array<Region>();
    for (let i = 0; i < body.length; i++) {
      arrayRegion.push(Object.assign(new Region(), body[i]));
    }
    return arrayRegion;
  }
}
