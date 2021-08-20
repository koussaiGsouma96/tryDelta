import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltafacadesComponent } from './deltafacades.component';

describe('DeltafacadesComponent', () => {
  let component: DeltafacadesComponent;
  let fixture: ComponentFixture<DeltafacadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeltafacadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltafacadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
