import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.scss']
})
export class AddNewCourseComponent {


  course_list = ['IT', 'CAD', 'Trending', 'Language']


  constructor(private fb: FormBuilder, private backend: BackendService, private messageService: MessageService) { }

  course: FormGroup = this.fb.group({
    courseName: ['', Validators.required],
    title: ['', Validators.required],
    desc: [],
    course_img_URL: ['', Validators.required],
    rating: [],
    student_enrol: [],
    problem_solve: [],
    months: [],
    hours: [],
    Learn: this.fb.array([this.fb.control('')]),
    curriculum: this.fb.array([this.fb.control('')]),
    faculty: this.fb.array([
      this.fb.group({
        name: [''],
        image: ['']
      })
    ]),
  })

  get Learn(): any {
    return this.course.get('Learn') as FormArray
  }

  addMoreLearnData() {
    this.Learn.push(this.fb.control(''))
  }

  removeLearn(i: number) {
    this.Learn.removeAt(i)
  }

  get curriculum() {
    return this.course.get('curriculum') as FormArray
  }

  addMoreCurriculumData() {
    this.curriculum.push(this.fb.control(''))
  }

  removeCurriculum(i: number) {
    this.curriculum.removeAt(i)
  }

  get faculty() {
    return this.course.get('faculty') as FormArray
  }

  addMoreFacultyData() {
    this.faculty.push(
      this.fb.group({
        name: [''],
        image: ['']
      })
    )
  }

  removeFaculty(i: number) {
    this.faculty.removeAt(i)
  }


  course_data(data: any) {

    console.log(data);

    let body = {
      "title": data.title,
      "desc": data.desc,
      "img": data.course_img_URL,
      "detail": {
        "rating": data.rating,
        "student_enrol": data.student_enrol,
        "problem": data.problem_solve,
        "month": data.months,
        "hour": data.hours,
        "learn": data.Learn,
        "curriculum": data.curriculum,
        "faculty": data.faculty
      }
    }

    console.log(data.courseName);


    if (data.courseName) {
      this.backend.postNewCourse(data.courseName, body).subscribe({
        next: () => {
          this.course.reset();
          this.messageService.add({ key: 'bc', severity: 'success', summary: 'Success', detail: 'New Course Has Been Added !!' });
        }, error: () => {
          this.messageService.add({ key: 'bc', severity: 'error', summary: 'Error', detail: 'Something Went Wrong !!' });
        }
      })
    }


  }


}
