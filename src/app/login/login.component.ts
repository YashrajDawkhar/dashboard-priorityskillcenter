import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginGuardService } from '../service/login-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private messageService: MessageService,private router:Router,private guard:LoginGuardService) {}

  login: any = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  LoginData(data: any) {

    Object.keys(this.login.controls).forEach((key) => {
      this.login.controls[key].markAsDirty();
    });

    if (this.login.valid) {
      if(data.email=='admin@gmail.com' && data.password=='9090'){
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login successfull !!' });
        this.guard.accessLevel(true)
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'You have enter a wrong username or password !!' });
      }
    }

  }


}
