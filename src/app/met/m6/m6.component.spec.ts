import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M6Component } from './m6.component';

describe('M6Component', () => {
  let component: M6Component;
  let fixture: ComponentFixture<M6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
