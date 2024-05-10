import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddusersInstructureComponent } from './addusers-instructure.component';

describe('AddusersInstructureComponent', () => {
  let component: AddusersInstructureComponent;
  let fixture: ComponentFixture<AddusersInstructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddusersInstructureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddusersInstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
