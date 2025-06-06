import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileIncompleteComponent } from './profile-incomplete.component';

describe('ProfileIncompleteComponent', () => {
  let component: ProfileIncompleteComponent;
  let fixture: ComponentFixture<ProfileIncompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileIncompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileIncompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
