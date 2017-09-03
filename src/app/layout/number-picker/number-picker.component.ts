/**
 * Created by andrey on 03.09.2017.
 */
import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-number-picker',
  templateUrl: './number-picker.component.html',
  styleUrls: ['./number-picker.component.css']
})
export class NumberPickerComponent implements OnInit {

  value: number = 0;
  result: string = '####';
  constructor(private dialogRef: MdDialogRef<NumberPickerComponent>) { }

  ngOnInit() {
  }

  resultComplete(){
    this.dialogRef.close(this.value);
  }

  setResult(val: string){
    if (this.result.match(/[,]/) && val == ',')
      return;
    this.result = this.result.replace(/[#]/g , '');
    this.result += val;
    this.value = parseFloat(this.result);
  }

  clearValue(){
    this.result = '####';
  }
}
