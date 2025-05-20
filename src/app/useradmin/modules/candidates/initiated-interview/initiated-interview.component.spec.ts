import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiatedInterviewComponent } from './initiated-interview.component';

describe('InitiatedInterviewComponent', () => {
  let component: InitiatedInterviewComponent;
  let fixture: ComponentFixture<InitiatedInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InitiatedInterviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitiatedInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
