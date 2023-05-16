import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCircleComponent } from './pet-circle.component';

describe('PetCircleComponent', () => {
  let component: PetCircleComponent;
  let fixture: ComponentFixture<PetCircleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetCircleComponent]
    });
    fixture = TestBed.createComponent(PetCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
