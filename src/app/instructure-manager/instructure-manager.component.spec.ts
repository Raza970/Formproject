import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructureManagerComponent } from './instructure-manager.component';

describe('InstructureManagerComponent', () => {
  let component: InstructureManagerComponent;
  let fixture: ComponentFixture<InstructureManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructureManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructureManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
