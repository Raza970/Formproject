import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmailFormComponent } from './email-form/email-form.component';
import { InstructureManagerComponent } from './instructure-manager/instructure-manager.component';
import { AddInstructorsComponent } from './add-instructors/add-instructors.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AddlocationComponent } from './addlocation/addlocation.component';
import { AddclientComponent } from './addclient/addclient.component';
import { AddusersInstructureComponent } from './addusers-instructure/addusers-instructure.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { CourseReportRecipientComponent } from './course-report-recipient/course-report-recipient.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    EmailFormComponent,
    InstructureManagerComponent,
    AddInstructorsComponent,
    AddlocationComponent,
    AddclientComponent,
    AddusersInstructureComponent,
    AddcourseComponent,
    CourseReportRecipientComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'forms';
}
