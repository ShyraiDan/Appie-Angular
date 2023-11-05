import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-right',
  templateUrl: './footer-right.component.html',
  styleUrls: ['./footer-right.component.css'],
})
export class FooterRightComponent implements OnInit {
  @Input() class: string;
  @Input() text: string;

  constructor() {}

  ngOnInit(): void {}
}
