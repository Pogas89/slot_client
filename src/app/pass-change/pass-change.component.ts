import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { TokenStorageService } from '../auth/token-storage.service';


@Component({
  selector: 'app-pass-change',
  templateUrl: './pass-change.component.html',
  styleUrls: ['./pass-change.component.css']
})
export class PassChangeComponent implements OnInit {
  hide = true;
  password: string;
  username: string;
  isChanged = false;
  isFailed = false;
  errorMessage = '';

  constructor(
    private userService: UserService,
    private location: Location,
    private token: TokenStorageService
  ) { }

  ngOnInit() {
    this.username = this.token.getUsername();
  }

  goBack(): void {
    this.location.back();
  }

  save() {
    this.userService.changePass([this.password, this.username]).subscribe(
      data => {
        this.isChanged = true;
        this.isFailed = false;
      },
      error => {
        this.isChanged = false;
        this.isFailed = true;
        console.log(error)
      }
    );
  }
}
