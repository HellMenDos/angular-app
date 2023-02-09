import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModuleModule } from 'src/app/components/ui-module.module';
import { CourseComponent } from './course.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CourseComponent },
];

@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    UiModuleModule,
    RouterModule.forChild(routes),

  ]
})
export class CourseModule { }
