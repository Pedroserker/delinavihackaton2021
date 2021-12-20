import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChaServService {
  messages:any[] = [
    {
      text: "Hola! por el momento estoy en desarrollo!",
      date: new Date(),
      reply: false,
      type:  'text',
      files: "files",
      user: {
        name: 'Azure Bot Services',
        avatar: 'https://img.icons8.com/plasticine/2x/26e07f/bot.png',
      }
    }
  ];
  reply(message: any) {
    return this.messages;
  }
  loadMessages(): any[] {
    return this.messages;
  }

  constructor() { }
}
