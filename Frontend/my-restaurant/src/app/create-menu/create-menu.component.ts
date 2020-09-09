import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { Menu } from '../models/menu';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {

  @Input() menu: Menu = new Menu();

  constructor(
    private router: Router,
    private rest: RestService
  ) { }

  ngOnInit(): void {
  }

  createMenu() {
    console.log(this.menu);
    this.rest.createMenu(this.menu).subscribe();
    this.router.navigate(['/homepage']);
  }


}
