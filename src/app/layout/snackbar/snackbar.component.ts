import {Component, OnInit} from '@angular/core';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  message: string;

  constructor(public snackbar: MdSnackBar) {
  }

  ngOnInit() {
  }

}
