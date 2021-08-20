import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealiserComponent } from './realiser.component';

describe('RealiserComponent', () => {
  let component: RealiserComponent;
  let fixture: ComponentFixture<RealiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealiserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
