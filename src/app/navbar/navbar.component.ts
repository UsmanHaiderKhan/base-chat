import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Observable} from 'rxjs';
import firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Observable<firebase.User>;
  userEmail: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.user = this.authService.authUser();
    if (this.user === undefined) {
      console.log('User not Defined');
      return;
    }
    this.user.subscribe(users => {
      if (users) {
        this.userEmail = users.email;
      }
    });
  }

  logout(): void {
    this.authService.logout();
  }

  login(): void {
    return;
  }
}
