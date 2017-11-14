import {Pipe, PipeTransform} from '@angular/core';
/**
 * Created by AZagorskyi on 10.11.2017.
 */
@Pipe({
  name: 'circleRadiusPipe'
})
export class CircleRadiusPipe implements PipeTransform {
  transform(thisAmount: number, minAmount: number, maxAmount: number): number {
    let radius = 0;
    const maxRadius = 40000;
    const minRadius = 5000;

    if (maxAmount === thisAmount) {
      radius = maxRadius;
    } else {
      if (minAmount === thisAmount) {
        radius = minRadius;
      } else {
        const factor = this.setFactor(thisAmount, minAmount, maxAmount);
        radius = (maxRadius - minRadius) * factor + minRadius;
      }
    }
    return radius;
  }
  private setFactor(thisAmount: number, minAmount: number,  maxAmount: number): number {
    const delta = maxAmount - minAmount;
    return (thisAmount - minAmount) / delta;
  }

}
