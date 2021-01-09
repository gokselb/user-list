import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss']
})
export class ViewMessagePage implements OnInit {
  public user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.selectedUser.value;

  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Users' : '';
  }
}
