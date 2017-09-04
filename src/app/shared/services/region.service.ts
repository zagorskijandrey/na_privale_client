///<reference path="../../../../node_modules/@types/node/index.d.ts"/>
/**
 * Created by AZagorskyi on 03.07.2017.
 */
import {Injectable} from '@angular/core';
import {ExtractService} from './extract.service';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Region} from '../models/region';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {AuthHttp} from 'angular2-jwt';
import {Router} from '@angular/router';

@Injectable()
export class RegionService extends ExtractService {
  constructor(protected authHttp: AuthHttp, protected router: Router) {
    super(router);
  }

  getRegions(): Observable<Array<Region>> {
    return this.authHttp.get(environment.api + 'p_map')
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
