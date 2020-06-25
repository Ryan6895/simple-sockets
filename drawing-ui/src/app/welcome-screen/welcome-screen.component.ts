
import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.less']
})
export class WelcomeScreenComponent implements OnInit {
  title = 'front-end';
  message: string;
  messages: string[] = [];

  public name: string;

  constructor(private socketService: ChatService) { }

  ngOnInit(): void {
    this.socketService
    .getMessages()
    .subscribe((message: string) => {
      this.messages.push(message);
    })
  }

  public joinRoom(){
    this.socketService.joinRoom()
  }

  public createRoom(){

  }

  public sendMessage(){
    this.socketService.message(this.message);
    this.message = '';
  }

  //route to lobby
}
