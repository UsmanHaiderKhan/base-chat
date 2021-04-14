import {Routes} from '@angular/router';
import {SignupComponent} from './app/signup/signup.component';
import {LoginFormComponent} from './app/login-form/login-form.component';
import {ChatroomComponent} from './app/chatroom/chatroom.component';

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
    path: '', redirectTo: 'login', pathMatch: 'full'
  },

];
