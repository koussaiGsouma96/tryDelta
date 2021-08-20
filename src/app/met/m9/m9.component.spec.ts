import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M9Component } from './m9.component';

describe('M9Component', () => {
  let component: M9Component;
  let fixture: ComponentFixture<M9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
