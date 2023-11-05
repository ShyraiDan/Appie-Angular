import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-get-started-advantage',
  templateUrl: './get-started-advantage.component.html',
  styleUrls: ['./get-started-advantage.component.css'],
})
export class GetStartedAdvantageComponent implements OnInit {
  @Input() item: {
    title: string;
    description: string;
  };

  constructor() {}

  ngOnInit(): void {}
}
