import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent {
  public title: string;
  public message: string;

  constructor(public dialog: MatDialog) {}
}
