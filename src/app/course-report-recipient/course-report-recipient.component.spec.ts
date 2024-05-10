import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseReportRecipientComponent } from './course-report-recipient.component';

describe('CourseReportRecipientComponent', () => {
  let component: CourseReportRecipientComponent;
  let fixture: ComponentFixture<CourseReportRecipientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseReportRecipientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseReportRecipientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
