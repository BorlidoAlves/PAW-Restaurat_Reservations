import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  
  users: any;
  currentUser: any;

  constructor(
    public rest: RestService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.rest.getUsers().subscribe((data: {}) => {
      this.users = data;
    });
  }

  delete(id: string){
    this.rest.deleteUser(id).subscribe();
    this.router.navigate(['/homepage']);
  }

}
