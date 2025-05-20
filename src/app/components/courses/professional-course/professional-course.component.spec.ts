import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCourseComponent } from './professional-course.component';

describe('ProfessionalCourseComponent', () => {
  let component: ProfessionalCourseComponent;
  let fixture: ComponentFixture<ProfessionalCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfessionalCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessionalCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
