import {Component, OnInit} from '@angular/core';
import {WindowService} from '../services/windowService';
import firebase from 'firebase';


@Component({
  selector: 'app-phone-verification',
  templateUrl: './phone-verification.component.html',
  styleUrls: ['./phone-verification.component.css']
})
export class PhoneVerificationComponent implements OnInit {
  windowRef: any;
  verificationCode: string;
  user: any;
  el64Number: string;


  constructor(private window: WindowService) {
  }

  ngOnInit(): void {
    this.windowRef = this.window.WindowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();
  }

  sendLoginCode() {
    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = this.el64Number;
    firebase.auth().signInWithPhoneNumber(num, appVerifier).then(result => {
      this.windowRef.confirmationResult = result;

    })
      .catch(error => console.log(error));
  }

  verifyLoginCode() {
    this.windowRef.confirmationResult.confirm(this.verificationCode).then(result => {
      this.user = result.user;
    }).catch(error => console.log(error, 'Incorrect Code Entered!'));
  }
}
