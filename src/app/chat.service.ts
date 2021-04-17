import {Injectable} from '@angular/core';
import {ChatMessageModel} from './model/chat-message.model';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user: any;
  chatMessages: AngularFireList<any>;
  chatMessage: ChatMessageModel;
  userName: Observable<string>;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }
    });
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
      userName: 'kasa ha jani',
      email
    });
    console.log('Send Message');
  }

  getMessages(): AngularFireList<ChatMessageModel> {
    debugger;
    return this.db.list('messages');
  }

  getTimeStamp(): any {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' + (now.getUTCMonth()) + '/' + now.getUTCDate();
    const time = now.getUTCHours() + '/' + +(now.getUTCMinutes()) + '/' + now.getUTCSeconds();
    return (date + ' ' + time);
  }

}
