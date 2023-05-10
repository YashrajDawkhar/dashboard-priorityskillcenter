import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  error: string = ''

  login: any = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  LoginData(data: any) {

    Object.keys(this.login.controls).forEach((key) => {
      this.login.controls[key].markAsDirty();
    });
    if (this.login.valid) {
      // this.backend.IntelliAssistLogin(data.email, data.password).subscribe({
      // 	next: (data: any) => {
      // 		if (data.successOrErrorCode != 0) {
      // 			this.error = data.message
      // 		} else {
      // 			let message = this.backend.UserRedirect(data)
      // 			this.messageService.add({ severity: message.key, summary: 'Success', detail: message.value });
      // 		}
      // 	},
      // 	error: () => {
      // 		this.messageService.add({ severity: 'warn', summary: 'Failure', detail: "Authentication Api Failed" });
      // 	}
      // })
    }
  }

  removeError(email: any) {
    this.error = ''
  }

}
