export class ChatMessageModel {
  $key?: string;
  email?: string;
  userName?: string;
  message?: string;
  timeSent?: Date = new Date();
}
