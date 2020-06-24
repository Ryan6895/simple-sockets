import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.less']
})
export class LobbyComponent implements OnInit {

  public players: any = [{name: "test"}];
  displayedColumns: string[] = ['name'];

  constructor() { }

  ngOnInit(): void {
  }

}
