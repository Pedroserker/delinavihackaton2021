import { Component, OnInit } from '@angular/core';
import {ChaServService} from '../../services/cha-serv.service';
@Component({
  selector: 'app-nebular',
  providers :[ChaServService],
  templateUrl: './nebular.component.html',
  styleUrls: ['./nebular.component.css']
})
export class NebularComponent implements OnInit {
  messages: any[];
  constructor(protected chatShowService:ChaServService) { 
    this.messages = this.chatShowService.loadMessages();
  }

  ngOnInit(): void {
  }

  
  sendMessage(event: any) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: 'Usuario',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });
    
  }

}
