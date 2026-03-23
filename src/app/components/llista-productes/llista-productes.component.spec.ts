import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaProductesComponent } from './llista-productes.component';

describe('LlistaProductesComponent', () => {
  let component: LlistaProductesComponent;
  let fixture: ComponentFixture<LlistaProductesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistaProductesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LlistaProductesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
