import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: any;
  currentUser: any;

  constructor(
    public rest: RestService,
    private router: Router,
    private authService: AuthService
  ) { }

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

  delete(){
    this.rest.deleteUser(this.currentUser.id).subscribe();
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  edit(){
    this.router.navigate(['/changeUser']);
  }

}
