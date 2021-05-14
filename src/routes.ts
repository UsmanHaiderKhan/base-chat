import {Routes} from '@angular/router';
import {SignupComponent} from './app/signup/signup.component';
import {LoginFormComponent} from './app/login-form/login-form.component';
import {ChatroomComponent} from './app/chatroom/chatroom.component';
import {PhoneVerificationComponent} from './app/phone-verification/phone-verification.component';

export const appRoutes: Routes = [
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'login-form', component: LoginFormComponent
  },
  {
    path: 'chat', component: ChatroomComponent
  },
  {
    path: 'phoneNumber', component: PhoneVerificationComponent
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },


];
