import {Component, OnInit} from '@angular/core';
import firebase from 'firebase';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {resolve} from '@angular/compiler-cli/src/ngtsc/file_system';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string;
  password: string;
  displayName: string;
  errorMsg: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  signUp(): void {
    const email = this.email;
    const password = this.password;
    const displayName = this.displayName;
    this.authService.signUp(email, password, displayName)
      .then(resp => this.router.navigate(['chat']))
      .catch(error => this.errorMsg = error.message);
  }

}
