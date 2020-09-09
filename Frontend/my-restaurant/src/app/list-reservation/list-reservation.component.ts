import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { Status } from '../models/status';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {



  reservs: any;
  currentUser: any;
  formatedData: any;
  hour: any;
  status: Status = new Status();

  constructor(
    private rest: RestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getReservationUser();
  }

  getReservationUser(){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.rest.getListReservUser(this.currentUser.id).subscribe((data) => {
      this.reservs = data;
    });
  }

  cancel(id: string){
    this.status.estado = "Cancelada";
    this.rest.updateStatus(id, this.status).subscribe();
    this.router.navigate(['/homepage']);
  }
}
