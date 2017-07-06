import {NgModule} from '@angular/core';
import {PredictionPipe} from './prediction.pipe';
import {TranslateService} from '@ngx-translate/core';
/**
 * Created by AZagorskyi on 06.07.2017.
 */

@NgModule({
    exports: [PredictionPipe],
    declarations: [PredictionPipe],
    providers: [TranslateService]
  }
)
export class SharedPipesModule {

}
