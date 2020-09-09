import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit {

  menus: any

  constructor(
    private rest: RestService,
    private router: Router ) { }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus(){
    this.rest.getMenus().subscribe((data: {}) => {
      this.menus = data;
    });
  }

  delete(id: any){
    this.rest.deleteMenu(id).subscribe();
    this.router.navigate(['/homepage']);
  }

  edit(id: any){
    this.router.navigate(['/editMenu/'+id]);
  }
}
