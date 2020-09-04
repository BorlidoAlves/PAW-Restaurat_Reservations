import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() email: string;
  @Input() password: string;

  error: any;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('currentUser')){
      this.router.navigate(['/homepage']);
    }
  }

  login(): void{
    this.authService.login(this.email, this.password).subscribe(
      (user: any) => {
        if(user && user.token){
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.router.navigate(['/homepage']);
        }
      },
      (err) => {
        this.error = err.error.message;
      }
    );
  }
}
