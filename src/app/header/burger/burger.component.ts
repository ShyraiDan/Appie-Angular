import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css'],
})
export class BurgerComponent implements OnInit {
  constructor() {}

  selected = -1;
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

  footerRight = [
    { icon: 'mail', text: 'support@appie.com' },
    { icon: 'phone', text: '+(642) 342 762 44' },
    {
      icon: 'location_on',
      text: '442 Belle Terre St Floor 7, San Francisco, AV 4206',
    },
  ];

  ngOnInit(): void {}

  toggleAccordion(num: number) {
    if (this.selected === num) {
      this.selected = -1;
      return;
    }

    this.selected = num;
  }
}
