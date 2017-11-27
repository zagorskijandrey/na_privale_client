/**
 * Created by AZagorskyi on 22.11.2017.
 */
import {Fish} from './fish';

describe('Fish', () => {
  const obj = {
    id: 2, name: 'carp', weight: 10,
    distance: 120, bait: 'boil', time: '10.30'
  };
  const fish = new Fish();
  Object.assign(fish, obj);

  it('should fish create', () => {
    expect(fish instanceof Fish).toBeTruthy(true);
    expect(fish.name).toBe('carp');
    expect(fish.distance).toBe(120);
  });
});
