import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { Reserv } from '../models/reserv';
import { Hour } from '../models/hour';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent implements OnInit {

  @Input() reserv: Reserv = new Reserv();
  @Input() date: any;
  @Input() hour: any;
  
  currentUser: any;
  horarios: any;

  constructor(
    private rest: RestService
  ) { }

  ngOnInit(): void {
    this.getHorario()
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  getHorario(){
    this.rest.getHorario().subscribe((data) => {
      this.horarios = data;
      console.log(this.horarios);
    });
  }

  setNewHour(hour: Hour){
    this.hour = hour;
  }

  createReserv(){
    this.reserv.horario = this.date+"T"+this.hour;

    this.rest.createReservation(this.reserv, this.currentUser.id).subscribe();
  }

}
