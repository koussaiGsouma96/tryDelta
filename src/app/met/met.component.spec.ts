import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetComponent } from './met.component';

describe('MetComponent', () => {
  let component: MetComponent;
  let fixture: ComponentFixture<MetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
