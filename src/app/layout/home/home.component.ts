import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter() {
    // var text = $('.sub-elements').text();

    // var length = text.length;
    var timeOut;
    var character = 0;

    // timeOut = setTimeout(function () {
    //   character++;
    //   var type = text.substring(0, character);
    // //   $('.sub-elements').text(type);
    // //   typeWriter();
    // //
    // //   if (character == length) {
    // //     clearTimeout(timeOut);
    // //   }
    // //
    // }, 150);
  }
}
