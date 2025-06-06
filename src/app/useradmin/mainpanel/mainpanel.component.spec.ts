import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpanelComponent } from './mainpanel.component';

describe('MainpanelComponent', () => {
  let component: MainpanelComponent;
  let fixture: ComponentFixture<MainpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainpanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
