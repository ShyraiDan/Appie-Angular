import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  data = [
    {
      photo: '../../assets/i/about-thumb-2.png',
      desc: {
        title: 'Appie lets you launch your app in minutes.',
        subtitles: [
          {
            subtitle: 'Carefully designed',
            class:
              'advantage-item__icon-container advantage-item__icon-container_blue',
            icon: 'Tv',
          },
          {
            subtitle: 'Seamless Sync',
            class:
              'advantage-item__icon-container advantage-item__icon-container_green',
            icon: 'Cycle',
          },
        ],
      },
    },
    {
      photo: '../../assets/i/about-thumb-3.png',
      desc: {
        title: 'Browse over 40k Apps over the world.',
        subtitles: [
          {
            subtitle: 'User Interactive',
            class:
              'advantage-item__icon-container advantage-item__icon-container_purple',
            icon: 'group',
          },
          {
            subtitle: 'Seamless Sync',
            class:
              'advantage-item__icon-container advantage-item__icon-container_red',
            icon: 'smartphone',
          },
        ],
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
