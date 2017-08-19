import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private typewriter_texts: String[] = ['Женщина, которая никогда не видела своего мужа за ужением рыбы, не имеет понятия' +
    ', за какого терпеливого человека она вышла замуж - Эдгар Хау',
    'Самая плохая рыбалка лучше самой хорошей работы.',
    'Рыболовы бывают двух видов: одни смотрят на это занятие как на спорт, другим удается что-то поймать.'];
  private typewriter_text: String = 'Рыболовы бывают двух видов';
  private typewriter_display: String = '';
  private count: Number = 0;

  constructor() {
  }

  ngOnInit() {
    // for (let i = 0; i < this.typewriter_texts.length; i++) {
    //   this.typingCallback(this, this.typewriter_texts[i], this.typewriter_display);
    // }
    // this.typingCallback(this);
    this.typingCallback(this);

  }

  typingCallback(that) {
    const total_length = that.typewriter_texts[that.count].length;
    that.typewriter_text = that.typewriter_texts[that.count];
    const current_length = that.typewriter_display.length;
    let count = that.count;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
    } else {
      that.typewriter_display = '';
      that.count = ++count;
      if (that.count < that.typewriter_texts.length) {
        that.typingCallback(that);
      }
    }
    setTimeout(that.typingCallback, 100, that);
  }
}
