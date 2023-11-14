import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  socialItem = [
    { anchorCl: 'social-item__fb', iconCl: 'icon icon-facebook' },
    { anchorCl: 'social-item__tw', iconCl: 'icon icon-twitter' },
    { anchorCl: 'social-item__inst', iconCl: 'icon icon-instagram' },
    { anchorCl: 'social-item__in', iconCl: 'icon icon-linkedin2' },
  ];

  leftCenter = {
    title: 'Support',
    items: ['About Us', 'Service', 'Case Studies', 'Blog', 'Contact'],
  };

  rightCenter = {
    title: 'Support',
    items: ['Community', 'Resources', 'Faqs', 'Privacy Policy', 'Careers'],
  };

  footerRight = [
    { icon: 'mail', text: 'support@appie.com' },
    { icon: 'phone', text: '+(642) 342 762 44' },
    {
      icon: 'location_on',
      text: '442 Belle Terre St Floor 7, San Francisco, AV 4206',
    },
  ];
  endBtn = [
    { spanCl: 'icon icon-appleinc icon-appleinc_black', text: 'iOS' },
    { spanCl: 'icon icon-android', text: 'Android' },
  ];

  date = new Date().getFullYear();

  footerBtns = [
    { spanCl: 'icon icon-appleinc icon-appleinc_black', text: 'iOS' },
    { spanCl: 'icon icon-android', text: 'Android' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
