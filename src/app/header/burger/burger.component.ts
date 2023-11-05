import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css'],
})
export class BurgerComponent implements OnInit {
  constructor() {}

  selected = 0;
  acordeon = [
    { title: 'Home' },
    { title: 'Service' },
    { title: 'Pages' },
    { title: 'News' },
    { title: 'Contact' },
  ];
  social = [
    { spanCl: 'icon icon-facebook-blue' },
    { spanCl: 'icon icon-twitter-blue' },
    { spanCl: 'icon icon-instagram-blue' },
    { spanCl: 'icon icon-linkedin2-blue' },
  ];
  nums = [1, 2, 3, 4, 5];

  ngOnInit(): void {}
}
