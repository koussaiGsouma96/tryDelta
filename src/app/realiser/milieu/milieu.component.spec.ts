import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilieuComponent } from './milieu.component';

describe('MilieuComponent', () => {
  let component: MilieuComponent;
  let fixture: ComponentFixture<MilieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
