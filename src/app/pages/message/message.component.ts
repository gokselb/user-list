import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services';

import { User } from './../../models';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  public userSelected(): void {
    this.userService.selectedUser.next(this.user);
  }
}
