import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { RestService } from '../rest.service';
import { Label } from 'ng2-charts';
import { Month } from '../models/month';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() mes: any;

  averagePeople: Month;
  averageCancel: Month;
  averageReserv: Month;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = ['2006', '2007', '2008'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;


  public barChartData: ChartDataSets[] = [
    { data: [this.averageReserv.mes], label: 'Média Reservas' },
    { data: [this.averagePeople.mes], label: 'Média Pessoas' },
    { data: [this.averageCancel.mes], label: 'Média Cancelamento'}
  ];

  constructor(
    private rest: RestService,

  ) { }

  ngOnInit(): void {
    
  }

  month(){
    this.getAverageReserv();
    this.getAveragePeople();
    this.getAverageCancel();
  }

  getAverageReserv(){
    this.rest.getAverageReserv(this.mes).subscribe((data) => {
      this.averageReserv = data;
    });
  }

  getAveragePeople(){
    this.rest.getAverageReserv(this.mes).subscribe((data) => {
      this.averagePeople = data;
    });
  }

  getAverageCancel(){
    this.rest.getAverageReserv(this.mes).subscribe((data) => {
      this.averageCancel = data;
    });
  }

}
