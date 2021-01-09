import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';

import { environment } from 'src/environments/environment';

import { ServiceResult } from '../models';

export class BaseSocketService<T> {
  public message: string;
  constructor(public socket: Socket, public currentMessage: string) {
    this.message = currentMessage;
  }

  public getAll(): Observable<ServiceResult<T[]>> {
    return this.socket.fromEvent<ServiceResult<T[]>>(this.message);
  }
}
