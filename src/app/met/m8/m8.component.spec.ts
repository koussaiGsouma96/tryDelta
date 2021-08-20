import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M8Component } from './m8.component';

describe('M8Component', () => {
  let component: M8Component;
  let fixture: ComponentFixture<M8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
