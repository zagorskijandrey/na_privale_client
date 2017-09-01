import {Fish} from './fish';
/**
 * Created by AZagorskyi on 01.09.2017.
 */
export class FishingPage {
  id: number;
  province: string = null;
  region: string = null;
  hamlet: string = null;
  comment: string = null;
  fishes: Fish[] = [];
  date: Date;
}
