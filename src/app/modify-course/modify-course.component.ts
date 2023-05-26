import { Component, signal } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-modify-course',
  templateUrl: './modify-course.component.html',
  styleUrls: ['./modify-course.component.scss']
})
export class ModifyCourseComponent {

  data = signal([])

  constructor(private backend:BackendService){

    backend.getContactDetails().subscribe((d:any)=>{
      console.log(d);

      this.data.update(()=> d)
      
    })
    

  }


}
