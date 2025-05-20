import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPremiumCandidatesComponent } from './view-premium-candidates.component';

describe('ViewPremiumCandidatesComponent', () => {
  let component: ViewPremiumCandidatesComponent;
  let fixture: ComponentFixture<ViewPremiumCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewPremiumCandidatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewPremiumCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
