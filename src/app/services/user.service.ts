import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../models';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService extends BaseHttpService<User> {
  constructor(public httpClient: HttpClient) {
    super(httpClient, 'users');
  }
}
