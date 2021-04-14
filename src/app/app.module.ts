import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ChatFormComponent} from './chat-form/chat-form.component';
import {ChatroomComponent} from './chatroom/chatroom.component';
import {FeedComponent} from './feed/feed.component';
import {MessageComponent} from './message/message.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {SignupComponent} from './signup/signup.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserItemComponent} from './user-item/user-item.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {appRoutes} from '../routes';
import {AuthService} from './auth.service';
import {ChatService} from './chat.service';
import { NavbarComponent } from './navbar/navbar.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    ChatFormComponent,
    ChatroomComponent,
    FeedComponent,
    MessageComponent,
    LoginFormComponent,
    SignupComponent,
    UserListComponent,
    UserItemComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [AuthService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
