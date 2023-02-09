import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/main/main.module').then((m) => m.MainModule) },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule) },
  { path: 'course/:id', loadChildren: () => import('./pages/course/course.module').then((m) => m.CourseModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
