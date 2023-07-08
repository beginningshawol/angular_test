import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageAreaComponent } from './percentage-area.component';

describe('PercentageAreaComponent', () => {
  let component: PercentageAreaComponent;
  let fixture: ComponentFixture<PercentageAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentageAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
