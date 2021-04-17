import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChatService} from '../chat.service';
import {AngularFireList} from '@angular/fire/database';
import {ChatMessageModel} from '../model/chat-message.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  feeds: AngularFireList<ChatMessageModel>;

  constructor(private chat: ChatService) {
  }

  ngOnInit(): void {
    console.log('Feed initializing');
    this.feeds = this.chat.getMessages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.feeds = this.chat.getMessages();
  }

}
