import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { User } from '../models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: any;

  constructor(
    public rest: RestService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.rest.getUser(currentUser.id).subscribe((data: {}) => {
      this.user = data;
      console.log(this.user);
    });
  }

}
