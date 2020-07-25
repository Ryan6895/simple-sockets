import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.less']
})
export class LobbyComponent implements OnInit {

  public players: any = [];
  public newWord
  public room
  public message
  public messages: string[] = [];

  displayedColumns: string[] = ['name'];

  constructor(private socketService: ChatService) { }

  ngOnInit(): void {
    this.socketService
    .getUsers()
    .subscribe((roomUsers) => {
      this.players = roomUsers.Users
      this.room = roomUsers.Room
    })

    this.socketService
    .getMessages()
    .subscribe((message) => {
      this.messages.push(`${message.User}: ${message.Message}`)
    })
  }

  public sendMessage(){
    if(this.message != ''){
      this.socketService.message(this.room, this.message);
      this.message = '';
    }
  }

  startGame(){
    console.log("start game");

  }

}
