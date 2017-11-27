/**
 * Created by AZagorskyi on 24.11.2017.
 */
import {MarkerSetPipe} from './marker-set.pipe';

describe('MarkerSetPipe', () => {
  let pipe: MarkerSetPipe;
  let url: string;
  beforeEach(() => {
    pipe = new MarkerSetPipe();
    url = '../assets/images/markers/';
  });
  it('input url and prediction 3 return marker 2', () => {
    expect(pipe.transform(url, 3)).toEqual('../assets/images/markers/marker_2.png');
  });
  it('input url and prediction 9 return marker 5', () => {
    expect(pipe.transform(url, 9)).toEqual('../assets/images/markers/marker_5.png');
  });

  it('input url and prediction greater than 10 return marker 3', () => {
    expect(pipe.transform(url, 20)).toEqual('../assets/images/markers/marker_3.png');
  });

  it('input url and prediction less than 1 return marker 3', () => {
    expect(pipe.transform(url, -5)).toEqual('../assets/images/markers/marker_3.png');
  });
});
