import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {

  menu: any;
  id: any;

  constructor(
    private rest: RestService,
    private router: Router,
    private route: ActivatedRoute
   ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id']
      this.getMenu();
  }

  editMenu(){
    this.rest.updateMenu(this.id, this.menu).subscribe();
    this.router.navigate(['/listMenus']);
  }

  getMenu(){
    this.rest.getMenu(this.id).subscribe((data) => {
      this.menu = data;
    });
  }
}
