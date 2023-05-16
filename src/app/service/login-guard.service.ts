import { Injectable, effect, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {

  private showRoutingPage = signal(false)

  constructor(private router: Router) { }

  public accessLevel(v: boolean) {
    this.showRoutingPage.set(v)
  }

  canActivate() {
    if (!this.showRoutingPage()) {
      this.router.navigate(['/login'])
      return false
    }
    return true
  }

  canDeactivate() {
    if (this.showRoutingPage()) {
      this.router.navigate(['/course'])
      return false
    }
    return true
  }

  IfAnyChange = effect(() => {
    if(this.showRoutingPage()){
      this.router.navigate(['/course'])
    }else{
      this.router.navigate(['/login'])
    }
  })

}
