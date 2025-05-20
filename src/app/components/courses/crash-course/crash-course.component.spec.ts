import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrashCourseComponent } from './crash-course.component';

describe('CrashCourseComponent', () => {
  let component: CrashCourseComponent;
  let fixture: ComponentFixture<CrashCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrashCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrashCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
