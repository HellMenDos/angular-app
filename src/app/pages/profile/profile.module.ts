import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { UiModuleModule } from 'src/app/components/ui-module.module';


const routes: Routes = [
  { path: '', component: ProfileComponent },
];


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModuleModule,
  ]
})
export class ProfileModule { }
