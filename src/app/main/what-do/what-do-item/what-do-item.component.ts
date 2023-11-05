import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-what-do-item',
  templateUrl: './what-do-item.component.html',
  styleUrls: ['./what-do-item.component.css'],
})
export class WhatDoItemComponent implements OnInit {
  constructor() {}

  @Input() text: string;
  @Input() i: number;

  ngOnInit(): void {}
}
