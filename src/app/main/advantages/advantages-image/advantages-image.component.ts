import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-advantages-image',
  templateUrl: './advantages-image.component.html',
  styleUrls: ['./advantages-image.component.css'],
})
export class AdvantagesImageComponent implements OnInit {
  constructor() {}

  @Input() advItem;
  @Input() i: number;

  ngOnInit(): void {}
}
