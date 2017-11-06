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

@Injectable()
export class LocationService extends ExtractService {
  constructor(protected http: Http, protected router: Router) {
    super(router);
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
}
