import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrociniosComponent } from './patrocinios.component';

describe('PatrociniosComponent', () => {
  let component: PatrociniosComponent;
  let fixture: ComponentFixture<PatrociniosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatrociniosComponent]
    });
    fixture = TestBed.createComponent(PatrociniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
