import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { LobbyComponent } from './lobby/lobby.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", pathMatch: "full", component: WelcomeScreenComponent },
  { path: 'lobby', component: LobbyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
