import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data = [
    {
      photo: '../../assets/i/about-thumb-2.png',
      desc: {
        title: 'Appie lets you launch your app in minutes.',
        subtitleOne: 'Carefully designed',
        subtitleTwo: 'Seamless Sync',
      },
    },
    {
      photo: '../../assets/i/about-thumb-3.png',
      desc: {
        title: 'Browse over 40k Apps over the world.',
        subtitleOne: 'User Interactive',
        subtitleTwo: 'Choose a App',
      },
    },
  ];
}
