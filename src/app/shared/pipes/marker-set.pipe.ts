import {Pipe, PipeTransform} from '@angular/core';
/**
 * Created by AZagorskyi on 07.07.2017.
 */
@Pipe({
  name: 'markerSetPipe'
})
export class MarkerSetPipe implements PipeTransform {
  transform(url: string, prediction: number): string {
    // let url = '../../../../assets/images/markers/';
    switch (prediction) {
      case 1:
      case 2:
        url += 'marker_1.png';
        break;
      case 3:
      case 4:
        url += 'marker_2.png';
        break;
      case 5:
      case 6:
        url += 'marker_3.png';
        break;
      case 7:
      case 8:
        url += 'marker_4.png';
        break;
      case 9:
      case 10:
        url += 'marker_5.png';
        break;
      default:
        url += 'marker_3.png';
        break;
    }
    return url;
  }


}
