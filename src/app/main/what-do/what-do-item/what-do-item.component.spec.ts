import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatDoItemComponent } from './what-do-item.component';

describe('WhatDoItemComponent', () => {
  let component: WhatDoItemComponent;
  let fixture: ComponentFixture<WhatDoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WhatDoItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatDoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
