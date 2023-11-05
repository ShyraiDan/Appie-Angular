import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-do',
  templateUrl: './what-do.component.html',
  styleUrls: ['./what-do.component.css'],
})
export class WhatDoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data = [
    {
      containerCl: 'item-one-container animation',
      title: 'Easy to use',
    },
    {
      containerCl: 'item-one-container animation',
      title: 'App Development',
    },
    {
      containerCl: 'item-one-container animation',
      title: 'Fully Functional',
    },
    {
      containerCl: 'item-one-container animation',
      title: 'Secured protocol',
    },
  ];
}
