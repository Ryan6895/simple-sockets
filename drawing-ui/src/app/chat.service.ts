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

  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('message', (data) => {
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

    public getRooms = () => {
      return Observable.create((observer) => {
        this.socket.on('rooms', (data) => {
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

      public getUsers = () => {
        return Observable.create((observer) => {
          this.socket.on('roomUsers', (data) => {
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

  public joinRoom(name, room){
    this.socket.emit('join_room', {name: name, room: room});
  }

  public message(room,message){
    this.socket.emit('message', {room: room, message: message});
  }

  public AddCustomWord = (word): void => this.socket.emit('add_custom_word', word) 

}
