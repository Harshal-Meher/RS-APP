import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosSliderComponent } from './logos-slider.component';

describe('LogosSliderComponent', () => {
  let component: LogosSliderComponent;
  let fixture: ComponentFixture<LogosSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogosSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogosSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
