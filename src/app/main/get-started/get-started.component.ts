import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css'],
})
export class GetStartedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  advantage = [
    { title: '700k', description: 'App Downloads' },
    { title: '476+', description: 'Average Review' },
    { title: '30M', description: 'Active Users' },
  ];
}
