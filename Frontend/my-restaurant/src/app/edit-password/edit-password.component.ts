import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent implements OnInit {

  @Input() newPassword: string;
  @Input() newPasswordRepeat: string; 

  error: any;
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

  editPassword(){
    if(this.newPassword !== this.newPasswordRepeat){
      this.error = "As password não coincidem"
    }
    else
    {
      let passwordJson = { password: this.newPassword };
      this.rest.editPassword(this.currentUser.id, passwordJson).subscribe();
      localStorage.removeItem('currentUser');
      this.router.navigate(['/login']);
    }
  }
}
