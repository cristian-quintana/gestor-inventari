import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetaProducteComponent } from './targeta-producte.component';

describe('TargetaProducteComponent', () => {
  let component: TargetaProducteComponent;
  let fixture: ComponentFixture<TargetaProducteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetaProducteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TargetaProducteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
