import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ModifyCourseComponent } from './modify-course/modify-course.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DividerModule } from 'primeng/divider';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddNewCourseComponent,
    SidebarComponent,
    ModifyCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastModule,
    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    DividerModule,
    HttpClientModule,
    DropdownModule,
    TableModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
