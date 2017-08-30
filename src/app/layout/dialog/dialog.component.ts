import {Component} from '@angular/core';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent {
  // @Input() public isCloseModalComponent: boolean;
  public title: string;
  public message: string;

  constructor(public dialog: MdDialog) {}
}
