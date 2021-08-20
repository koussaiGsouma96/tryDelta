import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M5Component } from './m5.component';

describe('M5Component', () => {
  let component: M5Component;
  let fixture: ComponentFixture<M5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
