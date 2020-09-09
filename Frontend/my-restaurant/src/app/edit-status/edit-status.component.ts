import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from '../models/status';

@Component({
  selector: 'app-edit-status',
  templateUrl: './edit-status.component.html',
  styleUrls: ['./edit-status.component.css']
})
export class EditStatusComponent implements OnInit {

  @Input() status: Status = new Status(); 

  id:any;

  constructor(
    private rest: RestService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  edit(){
    this.rest.updateStatus(this.id, this.status).subscribe();
    this.router.navigate(['/homepage']);
  }
}
