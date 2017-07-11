import {NgModule} from '@angular/core';
import {PredictionPipe} from './prediction.pipe';
import {TranslateService} from '@ngx-translate/core';
import {MarkerSetPipe} from './marker-set.pipe';
/**
 * Created by AZagorskyi on 06.07.2017.
 */

@NgModule({
    exports: [PredictionPipe, MarkerSetPipe],
    declarations: [PredictionPipe, MarkerSetPipe],
    providers: [TranslateService]
  }
)
export class SharedPipesModule {

}
