import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmasDayComponent } from './christmas-day.component';

describe('ChristmasDayComponent', () => {
  let component: ChristmasDayComponent;
  let fixture: ComponentFixture<ChristmasDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChristmasDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristmasDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
