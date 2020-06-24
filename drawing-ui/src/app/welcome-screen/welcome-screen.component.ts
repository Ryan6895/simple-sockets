import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.less']
})
export class WelcomeScreenComponent implements OnInit {

  public name: string;

  constructor() { }

  ngOnInit(): void {
  }

  public joinRoom(){

  }

  public createRoom(){

  }

  //route to lobby
}
