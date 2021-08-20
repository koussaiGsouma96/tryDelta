import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetierComponent } from './metier.component';

describe('MetierComponent', () => {
  let component: MetierComponent;
  let fixture: ComponentFixture<MetierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
