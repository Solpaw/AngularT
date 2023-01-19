import { IUserResponse } from './../../models/models';
import { UserService } from './../../services/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit, OnDestroy {
  readonly pageSize: number = 10;
  pageNumber: number = 1;
  usersResponse?: IUserResponse;
  sub = new Subscription();

  constructor(private userService: UserService) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.sub.add(this.userService.getUsers(this.pageNumber, this.pageSize).subscribe(res => {
      this.usersResponse = res;
      this.pageNumber = res.page;
    }))
  }

  nextPage() {
    this.pageNumber++;
    this.fetchData();
  }

  previousPage() {
    this.pageNumber--;
    this.fetchData();
  }
}
