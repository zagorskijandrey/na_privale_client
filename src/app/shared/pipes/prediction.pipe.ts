/**
 * Created by AZagorskyi on 06.07.2017.
 */
import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'predictionPipe'
})
export class PredictionPipe implements PipeTransform {
  transform(prediction: number) {
      return prediction.toString();
  }
}
