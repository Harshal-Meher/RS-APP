import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletejobComponent } from './deletejob.component';

describe('DeletejobComponent', () => {
  let component: DeletejobComponent;
  let fixture: ComponentFixture<DeletejobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletejobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletejobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
