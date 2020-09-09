import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-user',
  templateUrl: './change-user.component.html',
  styleUrls: ['./change-user.component.css']
})
export class ChangeUserComponent implements OnInit {

  user: any;
  currentUser: any;

  constructor(
    public rest: RestService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.rest.getUser(this.currentUser.id).subscribe((data: {}) => {
        this.user = data;
        console.log(this.user);
      });
  }

  editUser(){
    this.rest.editUser(this.currentUser.id, this.user).subscribe();
    this.router.navigate(['/edit']);
  }
}
