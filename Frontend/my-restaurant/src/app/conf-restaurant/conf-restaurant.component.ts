import { Component, OnInit, Input } from '@angular/core';
import { RestConf } from '../models/restConf';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conf-restaurant',
  templateUrl: './conf-restaurant.component.html',
  styleUrls: ['./conf-restaurant.component.css']
})
export class ConfRestaurantComponent implements OnInit {

  @Input() restConf: RestConf =  new RestConf();

  constructor(
    private rest: RestService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createConf(){
    this.rest.createConf(this.restConf).subscribe();
    this.router.navigate(['/homepage']);
  }

}
