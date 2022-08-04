import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherCornerComponent } from './mother-corner.component';

describe('MotherCornerComponent', () => {
  let component: MotherCornerComponent;
  let fixture: ComponentFixture<MotherCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherCornerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
