import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeWayComponent } from './creative-way.component';

describe('CreativeWayComponent', () => {
  let component: CreativeWayComponent;
  let fixture: ComponentFixture<CreativeWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreativeWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativeWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
