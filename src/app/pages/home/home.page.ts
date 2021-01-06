import { Component } from '@angular/core';
import { User } from 'src/app/models';
import { UserHttpService } from 'src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public users: User[];
  constructor(private userService: UserHttpService) {
    this.getMessages();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): void {
    this.userService.getAll().subscribe(result  =>  {
      this.users = result as any;
    });
  }
}
