import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantagesDescComponent } from './advantages-desc.component';

describe('AdvantagesDescComponent', () => {
  let component: AdvantagesDescComponent;
  let fixture: ComponentFixture<AdvantagesDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvantagesDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvantagesDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
