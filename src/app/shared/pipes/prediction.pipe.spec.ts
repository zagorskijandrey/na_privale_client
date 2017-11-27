/**
 * Created by AZagorskyi on 24.11.2017.
 */
import {PredictionPipe} from './prediction.pipe';

describe('PredictionPipe', () => {
  let pipe: PredictionPipe;
  beforeEach(() => {
    pipe = new PredictionPipe();
  });
  it('input url and prediction 3 return marker 2', () => {
    const value = pipe.transform(9);
    expect(value).toEqual('9');
  });
});
