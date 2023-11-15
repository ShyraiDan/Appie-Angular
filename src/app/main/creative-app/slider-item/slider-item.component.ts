import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.css'],
})
export class SliderItemComponent implements OnInit {
  @Input() slide: {
    url: string;
  };

  constructor() {}

  ngOnInit(): void {}
}
