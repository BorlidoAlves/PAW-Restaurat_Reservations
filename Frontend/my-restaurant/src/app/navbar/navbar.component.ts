import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tipo: any;
  id: any;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log('Role', currentUser.tipo);
    this.tipo = currentUser.tipo;
    this.id = currentUser.id; 
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
