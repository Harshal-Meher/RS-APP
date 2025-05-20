import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewedCandidateComponent } from './interviewed-candidate.component';

describe('InterviewedCandidateComponent', () => {
  let component: InterviewedCandidateComponent;
  let fixture: ComponentFixture<InterviewedCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterviewedCandidateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterviewedCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
