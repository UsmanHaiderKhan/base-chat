import {Injectable} from '@angular/core';
import {ChatMessageModel} from './model/chat-message.model';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user: firebase.User;
  chatMessages: AngularFireList<ChatMessageModel>;
  chatMessage: ChatMessageModel;
  userName: Observable<string>;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }
      // this.getUser().subscribe(resp => {
      //   resp.userName = resp.displayName;
      // });
    });
  }

  getUser() {
    const userId = this.user.uid;
    const path = `/users/${userId}`;
    return this.db.object(path);
  }

  getUsers() {
    const path = '/users';
    return this.db.list(path);
  }


  sendMessage(msg: string): void {
    const timestamp = this.getTimeStamp();
    // const email = this.user.email;
    const email = 'test@gmail.com';
    this.chatMessages = this.getMessages();
    this.chatMessages = this.db.list('messages');
    this.chatMessages.push({
      message: msg,
      timeSent: timestamp,
      // userName: this.userName,
      userName: 'JohnDoe',
      email
    });
    console.log('Send Message');
  }

  getMessages(): AngularFireList<ChatMessageModel> {

    return this.db.list('messages');
  }

  getTimeStamp(): any {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' + (now.getUTCMonth()) + '/' + now.getUTCDate();
    const time = now.getUTCHours() + '/' + +(now.getUTCMinutes()) + '/' + now.getUTCSeconds();
    return (date + ' ' + time);
  }

}
