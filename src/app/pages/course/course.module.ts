import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModuleModule } from 'src/app/components/ui-module.module';
import { CourseComponent } from './course.component';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: CourseComponent },
  { path: 'video/:id',component: VideoComponent },
  { path: 'test/:id',component: TestComponent }

];

@NgModule({
  declarations: [
    CourseComponent,
    VideoComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    UiModuleModule,
    RouterModule.forChild(routes),

  ]
})
export class CourseModule { }
