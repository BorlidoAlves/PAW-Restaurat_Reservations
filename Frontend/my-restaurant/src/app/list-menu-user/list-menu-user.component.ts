import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-list-menu-user',
  templateUrl: './list-menu-user.component.html',
  styleUrls: ['./list-menu-user.component.css']
})
export class ListMenuUserComponent implements OnInit {
  menus: any

  constructor(
    private rest: RestService,
    ) { }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus(){
    this.rest.getMenus().subscribe((data: {}) => {
      this.menus = data;
    });
  }


}
