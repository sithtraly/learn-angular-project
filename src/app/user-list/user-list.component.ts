import { Component, OnInit } from '@angular/core';
import { UserList } from './userlist';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userlist = UserList;
  constructor() { }

  ngOnInit(): void {
  }

}
