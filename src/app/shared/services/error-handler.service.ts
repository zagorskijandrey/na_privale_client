/**
 * Created by AZagorskyi on 29.08.2017.
 */

import {Injectable, ViewContainerRef} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {NavigationStart, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import {DialogComponent} from '../../layout/dialog/dialog.component';

@Injectable()
export class ErrorHandlerService {

  constructor(private dialog: MdDialog) { }

  public confirm(title: string, message: string): Observable<boolean> {

    let dialogRef: MdDialogRef<DialogComponent>;

    dialogRef = this.dialog.open(DialogComponent);

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }

  // confirm(error: String) {
  //   this.dialog.open(DialogComponent).updateSize("300px", "400px");
  // }
}
