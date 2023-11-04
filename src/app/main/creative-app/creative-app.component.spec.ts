import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeAppComponent } from './creative-app.component';

describe('CreativeAppComponent', () => {
  let component: CreativeAppComponent;
  let fixture: ComponentFixture<CreativeAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreativeAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
