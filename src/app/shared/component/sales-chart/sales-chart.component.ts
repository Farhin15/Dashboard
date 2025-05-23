import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartOptions, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-sales-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './sales-chart.component.html',
  styleUrl: './sales-chart.component.scss'
})
export class SalesChartComponent {

  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to resize with the container
  };
  
  public lineChartLabels: string[] = ['January', 'February', 'March', 'April', 'May'];
  public lineChartData: ChartData<'line'> = {
    labels: this.lineChartLabels,
    datasets: [
      {
        data: [12000, 14000, 10000, 16000, 12000],
        label: 'Sales Revenue',
         backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
      },
    ],
  };
  public lineChartType: ChartType = 'line';

}
