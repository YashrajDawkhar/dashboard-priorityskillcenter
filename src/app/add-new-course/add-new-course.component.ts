import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.scss']
})
export class AddNewCourseComponent {

  constructor(private fb: FormBuilder) { }

  course: FormGroup = this.fb.group({
    title: [],
    desc: [],
    course_img_URL: [],
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


  course_data() {

    console.log(this.course.value);


  }


}
