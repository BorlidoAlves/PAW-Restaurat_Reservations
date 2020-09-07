import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RestService } from '../rest.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  @Input() user: User = new User();
  error: any;
  success: any;
  
  constructor(
    public rest: RestService,
    private router: Router,
    private authSetvice : AuthService,
  ) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.rest.registerUser(this.user).subscribe(
      (success: User) => {
        console.log('Added: '+ success);
        this.success = "User added !";
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log("Error: ", err);
      }
    );
  }

}
