import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M4Component } from './m4.component';

describe('M4Component', () => {
  let component: M4Component;
  let fixture: ComponentFixture<M4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
