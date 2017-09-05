/**
 * Created by AZagorskyi on 29.08.2017.
 */

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MdDialog, MdDialogRef} from '@angular/material';
import {NumberPickerComponent} from '../../layout/number-picker/number-picker.component';

@Injectable()
export class NumberPickerService {

  constructor(private dialog: MdDialog) { }

  public enterNum(parameter: string): Observable<number> {

    let dialogRef: MdDialogRef<NumberPickerComponent>;

    dialogRef = this.dialog.open(NumberPickerComponent);
    dialogRef.componentInstance.parameter = parameter;
    return dialogRef.afterClosed();
  }
}
