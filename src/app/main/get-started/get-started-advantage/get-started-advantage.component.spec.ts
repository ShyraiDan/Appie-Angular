import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStartedAdvantageComponent } from './get-started-advantage.component';

describe('GetStartedAdvantageComponent', () => {
  let component: GetStartedAdvantageComponent;
  let fixture: ComponentFixture<GetStartedAdvantageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStartedAdvantageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStartedAdvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
