import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public typewriter_text: String = 'Женщина, которая никогда не видела своего мужа за ужением рыбы, не имеет понятия' +
    ', за какого терпеливого человека она вышла замуж - Эдгар Хау;Самая плохая рыбалка лучше самой хорошей работы.;' +
    'Рыболовы бывают двух видов: одни смотрят на это занятие как на спорт, другим удается что-то поймать.;' +
    'Пока не поймаешь настоящую рыбу, рыбалка скучна, а после этого — отвратительна - Дейв Барри;' +
    'Хороший клев бывает либо до того, как вы начали ловить, либо после этого.;' +
    'Самыми крупными из пойманных рыб всегда бывают те, что сорвались с крючка - Юджин Филд;' +
    'Одни рыболовы ловят рыбу, другие всю жизнь ее только подкармливают.;' +
    'Чем длиннее руки у рыболова, тем меньше веры его рассказам.;' +
    'Рыбалка — промежуточное звено между спортом и религией - Джозефин Тей;';
  public typewriter_display: String = '';

  constructor() {
  }

  ngOnInit() {
    this.typingCallback(this);
  }

  typingCallback(that) {
    const total_length = that.typewriter_text.length;
    if (that.count < total_length) {
      if (that.typewriter_text[that.count] === ';') {
        that.typewriter_display = '';
        ++that.count;
      } else {
        that.typewriter_display += that.typewriter_text[that.count];
        ++that.count;
      }
    } else {
      that.typewriter_display = '';
      that.count = 0;
    }
    setTimeout(that.typingCallback, 200, that);
  }

  goFacebook() {
    window.open(
      'https://www.facebook.com/zagorskaya.o',
      '_blank'
    );
  }

  goGooglePlus() {
    window.open(
      'https://plus.google.com/110532500500235627765',
      '_blank'
    );
  }

  public setTypewriterText(text: String) {
    this.typewriter_text = text;
  }
}
