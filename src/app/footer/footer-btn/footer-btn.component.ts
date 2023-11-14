import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-btn',
  templateUrl: './footer-btn.component.html',
  styleUrls: ['./footer-btn.component.css'],
})
export class FooterBtnComponent implements OnInit {
  @Input() item: {
    spanCl: string;
    text: string;
  };

  constructor() {}

  ngOnInit(): void {}
}
