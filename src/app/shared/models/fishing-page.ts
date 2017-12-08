import {Fish} from './fish';
/**
 * Created by AZagorskyi on 01.09.2017.
 */
export class FishingPage {
  id: number;
  country: string = null;
  province: string = null;
  region: string = null;
  hamlet: string = null;
  id_hamlet: number;
  comment: string = null;
  fishes: Fish[] = [];
  date: Date;
  id_province: number = null;
}
