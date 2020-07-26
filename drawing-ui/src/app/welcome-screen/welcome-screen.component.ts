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
  public rooms: string[];

  constructor(private socketService: ChatService, private router: Router) { }

  ngOnInit(): void {
    this.socketService
    .getMessages()
    .subscribe((message: string) => {
      this.messages.push(message);
    })

    this.socketService
    .getRooms()
    .subscribe((rooms: string[]) => {
      this.rooms = rooms
    })
  }

  public onRoomSelected(e){
    this.room = e.value
  }

  public joinRoom(room){
    this.socketService.joinRoom(this.name,room)
    this.goToLobby()
  }

  public createRoom(){
    this.socketService.joinRoom(this.name,this.room)
    this.goToLobby()
  }

  private goToLobby(){
    this.router.navigate(['/lobby'])
  }
}
