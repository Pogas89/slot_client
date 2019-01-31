import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public searchText : string;
  users: User[];
  displayedColumns: string[] = ['username', 'delete'];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getSlotrooms();
  }

  ngOnChanges() {
    this.getSlotrooms();
  }
  getSlotrooms(): void {
    this.userService.getAll().subscribe(users => this.users = users);
  }

  delete(id: string): void {
    this.userService.delete(id).subscribe();
    this.users = this.users.filter(item => item.id != id);
  }
}
