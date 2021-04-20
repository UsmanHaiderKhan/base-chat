import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import firebase from 'firebase';
import {logger} from 'codelyzer/util/logger';
import {error} from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private authState: any;

  constructor(private auth: AngularFireAuth, private db: AngularFireDatabase, private route: Router) {
    this.user = auth.authState;
  }

  getCurrentUserId(): string {
    return this.authState !== null ? this.authState.uid : '';

  }

  login(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password).then(resp => {
      const status = 'online';
      this.setUserStatus(status);
      this.route.navigate(['chat']);
    });
  }

  signUp(email: string, password: string, displayName: string) {
    return this.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        const status = 'Online';
        this.setUserData(email, displayName, status);
      })
      .catch(error => console.log(error));

  }

  authUser() {
    return undefined;
  }

  logout() {
    return;
  }

  private setUserData(email: string, displayName: string, status: string): void {
    const path = `users/${this.getCurrentUserId}`;
    const data = {
      email,
      displayName,
      status
    };
    this.db.object(path).update(data).catch(error => console.log(error));

  }

  private setUserStatus(status: string) {
    const path = `users/${this.getCurrentUserId}`;
    const data = {

      status
    };
  }
}
