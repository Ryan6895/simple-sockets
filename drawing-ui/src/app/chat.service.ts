import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = 'http://localhost:3005';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  public sendMessage(message) {
    this.socket.emit('new-message', message);
  }

  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('message', (data) => {
        console.log(data);
        if (data) {

          observer.next(data);
        } else {
          observer.error('Unable To Reach Server');
        }
      });
      return () => {
        this.socket.disconnect();
      }
      })
    };

  public joinRoom(){
    console.log('join room');

    this.socket.emit('join_room', 'room1');
  }

  public message(e){
    console.log('sending message');

    this.socket.emit('message', {room:'room1', message:e});
  }

}
