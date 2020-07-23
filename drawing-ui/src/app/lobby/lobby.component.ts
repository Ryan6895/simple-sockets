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

  displayedColumns: string[] = ['name'];

  constructor(private socketService: ChatService) { }

  ngOnInit(): void {
    this.socketService
    .getUsers()
    .subscribe((users: string[]) => {
      this.players = users
      console.log(this.players);

    })
  }

  startGame(){
    console.log("start game");

  }

}
