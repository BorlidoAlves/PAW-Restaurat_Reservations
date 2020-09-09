import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.css']
})
export class ListReservationsComponent implements OnInit {

  reservs: any;
  currentUser: any;
  formatedData: any;
  hour: any;


  constructor(
    private rest: RestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getReservationUser();
  }

  getReservationUser(){
    
    this.rest.getReservations().subscribe((data) => {
      this.reservs = data;
    });
  }

  edit(id: string){
    this.router.navigate(['/editStatus/' + id]);
  }
}


