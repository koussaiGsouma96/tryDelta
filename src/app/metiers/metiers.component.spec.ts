import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetiersComponent } from './metiers.component';

describe('MetiersComponent', () => {
  let component: MetiersComponent;
  let fixture: ComponentFixture<MetiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetiersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
