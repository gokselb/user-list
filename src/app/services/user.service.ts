import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';

import { User } from '../models';
import { BaseSocketService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseSocketService<User> {
  public userList: User[] = [];
  public selectedUser: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(public socket: Socket) {
    super(socket, 'userList');
  }

  public startReceivingUsers(): void {
    this.getAll().subscribe(serviceResult => {
      if (serviceResult?.results?.length > 0) {
        this.userList.unshift(...serviceResult.results);
        if (this.userList.length > 150) {
          this.userList.pop();
        }

        if (this.userList.length > 30) {
          console.log(JSON.stringify(this.userList));
        }
      }
    });
  }
}
