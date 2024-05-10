import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstructorsComponent } from './add-instructors.component';

describe('AddInstructorsComponent', () => {
  let component: AddInstructorsComponent;
  let fixture: ComponentFixture<AddInstructorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddInstructorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddInstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
