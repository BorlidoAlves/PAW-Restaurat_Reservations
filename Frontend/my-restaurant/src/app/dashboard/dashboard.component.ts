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

  @Input() mes: Month = new Month();

  averagePeople: Month = new Month();
  averageCancel: Month = new Month(); 
  averageReserv: Month = new Month();

  data: [];
  
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

  public barChartLabels: Label[] = ['Média diaria durante um mês'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];


  public barChartData: ChartDataSets[] = [
    { data: [this.averageReserv.numAverage], label: 'Média Reservas' },
    { data: [this.averagePeople.numAverage], label: 'Média Pessoas' },
    { data: [this.averageCancel.numAverage], label: 'Média Cancelamento'}
  ];

  constructor(
    private rest: RestService,

  ){}

  ngOnInit(): void {
   
  }

  month(){

    this.rest.getAverageReserv(this.mes).subscribe((data) => {
      this.averageReserv = data;  
    });
    
    this.rest.getAveragePeople(this.mes).subscribe((data) => {
      this.averagePeople = data;
    });
    
    this.rest.getAverageCancel(this.mes).subscribe((data) => {
      this.averageCancel = data;
    });
    
    const dataR = [this.averageReserv.numAverage];
    
    const dataP = [this.averagePeople.numAverage];

    const dataC = [this.averageCancel.numAverage];
    
    this.barChartData[0].data = dataR;
    this.barChartData[1].data = dataP;
    this.barChartData[2].data = dataC;
  }

}
