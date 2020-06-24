import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameWindowComponent } from './game-window/game-window.component';
import { LobbyComponent } from './lobby/lobby.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    GameWindowComponent,
    LobbyComponent,
    WelcomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  exports:[
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
