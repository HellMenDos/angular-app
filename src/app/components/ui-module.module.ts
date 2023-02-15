import { ButtonComponent } from './button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*  Components import */
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { TestCardComponent } from './test-card/test-card.component';
import { VideoListComponent } from './video-list/video-list.component';
import { TestListComponent } from './test-list/test-list.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { QuestionCardComponent } from './question-card/question-card.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    InputComponent,
    LoginHeaderComponent,
    VideoCardComponent,
    TestCardComponent,
    VideoListComponent,
    TestListComponent,
    CourseCardComponent,
    QuestionCardComponent
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    InputComponent,
    LoginHeaderComponent,
    VideoCardComponent,
    TestCardComponent,
    VideoListComponent,
    TestListComponent,
    CourseCardComponent,
    QuestionCardComponent
  ]
})
export class UiModuleModule { }
