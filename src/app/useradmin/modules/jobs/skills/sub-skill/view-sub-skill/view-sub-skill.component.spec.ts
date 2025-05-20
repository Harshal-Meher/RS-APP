import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubSkillComponent } from './view-sub-skill.component';

describe('ViewSubSkillComponent', () => {
  let component: ViewSubSkillComponent;
  let fixture: ComponentFixture<ViewSubSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewSubSkillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewSubSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
