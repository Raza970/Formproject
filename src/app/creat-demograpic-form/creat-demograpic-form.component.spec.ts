import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatDemograpicFormComponent } from './creat-demograpic-form.component';

describe('CreatDemograpicFormComponent', () => {
  let component: CreatDemograpicFormComponent;
  let fixture: ComponentFixture<CreatDemograpicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatDemograpicFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatDemograpicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
