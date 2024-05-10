import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatRespondentFormComponent } from './creat-respondent-form.component';

describe('CreatRespondentFormComponent', () => {
  let component: CreatRespondentFormComponent;
  let fixture: ComponentFixture<CreatRespondentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatRespondentFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatRespondentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
