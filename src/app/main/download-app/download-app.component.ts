import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download-app',
  templateUrl: './download-app.component.html',
  styleUrls: ['./download-app.component.css'],
})
export class DownloadAppComponent implements OnInit {
  data = [
    {
      title: 'Android',
      device: 'Android',
      photo: '../../../assets/i/download-thumb-1.png',
    },
    {
      title: 'iOS & iPadOS',
      device: 'iOS',
      photo: '../../../assets/i/download-thumb-2.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
