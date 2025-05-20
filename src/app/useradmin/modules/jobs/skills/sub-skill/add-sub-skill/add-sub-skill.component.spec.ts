import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubSkillComponent } from './add-sub-skill.component';

describe('AddSubSkillComponent', () => {
  let component: AddSubSkillComponent;
  let fixture: ComponentFixture<AddSubSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSubSkillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSubSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
