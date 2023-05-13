import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuardService } from './service/login-guard.service';
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';
import { ModifyCourseComponent } from './modify-course/modify-course.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [() => inject(LoginGuardService).canDeactivate()]
  },
  {
    path: 'course',
    component: AddNewCourseComponent,
    canActivate: [() => inject(LoginGuardService).canActivate()]
  },
  {
    path: 'modify',
    component: ModifyCourseComponent,
    canActivate: [() => inject(LoginGuardService).canActivate()]
  },
  {
    path: '**',
    redirectTo: 'login'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
