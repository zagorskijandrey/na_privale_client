/**
 * Created by AZagorskyi on 06.11.2017.
 */
import {Injectable} from '@angular/core';
import {ExtractService} from './extract.service';
import {Http, Response} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../../../environments/environment';
import {AuthHttp} from 'angular2-jwt';
import {Hamlet} from '../models/hamlet';
import {LoaderService} from "./loader.service";

@Injectable()
export class LocationService extends ExtractService {
  constructor(protected authHttp: AuthHttp, protected http: Http, protected router: Router, protected loader: LoaderService) {
    super(router, loader);
  }

  getCountries(): Observable<Array<any>> {
    return this.http.get(environment.api + 'country')
      .map(this.getCountriesWithResponse.bind(this)).catch(this.handleError.bind(this));
  }

  getProvinces(id: number): Observable<Array<any>> {
    return this.http.get(environment.api + 'province?id=' + id)
      .map(this.getProvincesWithResponse.bind(this)).catch(this.handleError.bind(this));
  }

  getRegions(id: number): Observable<Array<any>> {
    return this.http.get(environment.api + 'region?id=' + id)
      .map(this.getRegionsWithResponse.bind(this)).catch(this.handleError.bind(this));
  }

  getHamlets(id: number): Observable<Array<any>> {
    return this.http.get(environment.api + 'hamlet?id=' + id)
      .map(this.getHamletsWithResponse.bind(this)).catch(this.handleError.bind(this));
  }

  getHamletByUsername(): Observable<Array<Hamlet>> {
    return this.authHttp.get(environment.api + 'past_fishing_map')
      .map(this.getHamletsDataWithResponse.bind(this)).catch(this.handleError.bind(this));
  }

  private getCountriesWithResponse(res: Response): Array<any> {
    return this.getResponseBody(res).country_list;
  }

  private getProvincesWithResponse(res: Response): Array<any> {
    return this.getResponseBody(res).province_list;
  }

  private getRegionsWithResponse(res: Response): Array<any> {
    return this.getResponseBody(res).region_list;
  }

  private getHamletsWithResponse(res: Response): Array<any> {
    return this.getResponseBody(res).hamlet_list;
  }

  private getHamletsDataWithResponse(res: Response): Array<Hamlet> {
    const body = this.getResponseBody(res).hamlet_data_list;
    const arrayRegion = new Array<Hamlet>();
    for (let i = 0; i < body.length; i++) {
      arrayRegion.push(Object.assign(new Hamlet(), body[i]));
    }
    return arrayRegion;
  }
}
