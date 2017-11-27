/**
 * Created by AZagorskyi on 22.11.2017.
 */
import {CircleRadiusPipe} from './circle-radius.pipe';

describe('CircleRadiusPipe', () => {
  let pipe: CircleRadiusPipe;
  beforeEach(() => {
    pipe = new CircleRadiusPipe();
  });
  it('input value 10 (click on circle) equals max amount return max radius', () => {
    expect(pipe.transform(10, 2, 10)).toEqual(40000);
  });
  it('input value 2 (click on circle) equals min amount return min radius', () => {
    expect(pipe.transform(2, 2, 10)).toEqual(5000);
  });
  it('input value 5 (click on circle) search factor and return min radius plus delta', () => {
    expect(pipe.transform(5, 2, 10)).toBeGreaterThan(5000);
    expect(pipe.transform(5, 2, 10)).toBeLessThan(40000);
  });
});
