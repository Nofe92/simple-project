import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(readonly userService: UserService) { }

  ngOnInit() {
    this.userService.returnUsers().subscribe( users =>
      this.users = users
    );
  }

}
