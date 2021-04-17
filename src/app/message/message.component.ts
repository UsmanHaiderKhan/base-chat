import {Component, Input, OnInit} from '@angular/core';
import {ChatMessageModel} from '../model/chat-message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() chatMessage: ChatMessageModel;
  userName: string;
  userEmail: string;
  messageContent: string;
  timeStamp: Date = new Date();

  constructor() {
  }

  ngOnInit(chatMessage = this.chatMessage): void {
    this.messageContent = this.chatMessage.message;
    this.timeStamp = this.chatMessage.timeSent;
    this.userEmail = this.chatMessage.email;
    this.userName = this.chatMessage.userName;

  }

}
