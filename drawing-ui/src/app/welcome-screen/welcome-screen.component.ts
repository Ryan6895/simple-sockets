import { Router } from '@angular/router';
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
  public room: string;

  constructor(private socketService: ChatService, private router: Router) { }

  ngOnInit(): void {
    this.socketService
    .getMessages()
    .subscribe((message: string) => {
      this.messages.push(message);
    })
  }

  public joinRoom(){
    this.socketService.joinRoom(this.name,this.room)
    this.goToLobby()
  }

  public createRoom(){
    this.socketService.joinRoom(this.name,this.room)
    this.goToLobby()
  }

  public sendMessage(){
    this.socketService.message(this.room, this.message);
    this.message = '';
  }

  private goToLobby(){
    this.router.navigate(['/lobby'])
  }
}
