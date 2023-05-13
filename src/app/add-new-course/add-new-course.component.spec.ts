import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCourseComponent } from './add-new-course.component';

describe('AddNewCourseComponent', () => {
  let component: AddNewCourseComponent;
  let fixture: ComponentFixture<AddNewCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewCourseComponent]
    });
    fixture = TestBed.createComponent(AddNewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
