/**
 * Created by AZagorskyi on 12.09.2017.
 */
import {Injectable} from '@angular/core';
import {MdSnackBar, MdSnackBarRef} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {SnackbarComponent} from '../../layout/snackbar/snackbar.component';

@Injectable()
export class SnackbarService {

  constructor(private snackbar: MdSnackBar) { }

  public confirm(message: string): Observable<void> {

    let snackbarRef: MdSnackBarRef<SnackbarComponent>;
    snackbarRef = this.snackbar.openFromComponent(SnackbarComponent, {duration: 3000});
    snackbarRef.instance.message = message;
    return snackbarRef.onAction();
  }
}
