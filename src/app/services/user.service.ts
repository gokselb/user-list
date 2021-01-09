import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

import { User } from '../models';
import { BaseSocketService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseSocketService<User> {
  public userList: User[] = [];

  constructor(public socket: Socket) {
    super(socket, 'userList');
  }

  public startReceivingUsers(): void {
    this.getAll().subscribe(servicerResult => {
      if (servicerResult?.results?.length > 0) {
        this.userList.unshift(...servicerResult.results);
        if (this.userList.length > 150) {
          this.userList.pop();
        }
      }
    });
  }
}
