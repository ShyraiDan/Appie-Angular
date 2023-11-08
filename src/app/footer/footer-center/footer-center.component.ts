import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-center',
  templateUrl: './footer-center.component.html',
  styleUrls: ['./footer-center.component.css'],
})
export class FooterCenterComponent implements OnInit {
  @Input() info: {
    title: string;
    items: string[];
  };

  constructor() {}

  ngOnInit(): void {
    console.log(this.info);
  }
}
