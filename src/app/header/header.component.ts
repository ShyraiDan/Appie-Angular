import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  burgerOpen = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  burgerClick(event: HTMLDivElement) {
    document.body.classList.toggle('lock');
    this.burgerOpen = !this.burgerOpen;
  }
}
