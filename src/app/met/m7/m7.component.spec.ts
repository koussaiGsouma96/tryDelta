import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M7Component } from './m7.component';

describe('M7Component', () => {
  let component: M7Component;
  let fixture: ComponentFixture<M7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
