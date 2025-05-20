import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPremiumCandidatesComponent } from './add-premium-candidates.component';

describe('AddPremiumCandidatesComponent', () => {
  let component: AddPremiumCandidatesComponent;
  let fixture: ComponentFixture<AddPremiumCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPremiumCandidatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPremiumCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
