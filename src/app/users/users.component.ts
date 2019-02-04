import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public searchText : string;
  isReset = false;
  users: User[];
  displayedColumns: string[] = ['username', 'reset', 'delete'];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  ngOnChanges() {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getAll().subscribe(users => this.users = users);
  }

  delete(id: string): void {
    this.userService.delete(id).subscribe();
    this.users = this.users.filter(item => item.id != id);
  }
  resetPass(id: string): void {
    this.userService.resetPass(id).subscribe();
    this.isReset=true;
  }
}
