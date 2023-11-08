import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-advantages-desc',
  templateUrl: './advantages-desc.component.html',
  styleUrls: ['./advantages-desc.component.css'],
})
export class AdvantagesDescComponent implements OnInit {
  @Input() advItem;

  constructor() {}

  ngOnInit(): void {
    console.log(this.advItem);
  }
}
