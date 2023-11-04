import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  navbar = [
    { title: 'Home' },
    { title: 'Service' },
    { title: 'Pages' },
    { title: 'News' },
    { title: 'Contact' },
  ];

  nums = [1, 2, 3, 4, 5];
}
