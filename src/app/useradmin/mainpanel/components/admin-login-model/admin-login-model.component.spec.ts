import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginModelComponent } from './admin-login-model.component';

describe('AdminLoginModelComponent', () => {
  let component: AdminLoginModelComponent;
  let fixture: ComponentFixture<AdminLoginModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminLoginModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminLoginModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
