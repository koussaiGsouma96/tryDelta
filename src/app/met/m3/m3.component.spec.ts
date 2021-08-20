import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3Component } from './m3.component';

describe('M3Component', () => {
  let component: M3Component;
  let fixture: ComponentFixture<M3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
