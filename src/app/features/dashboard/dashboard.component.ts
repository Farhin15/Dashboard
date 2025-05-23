import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../shared/pipes/filter.pipe';
import * as AOS from 'aos';
import { SalesChartComponent } from '../../shared/component/sales-chart/sales-chart.component';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule,FilterPipe, SalesChartComponent, TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrls : ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  metrics = {
    sales: 12000,
    users: 350,
    orders: 98
  };


  data = [
    { id: 1, name: 'Alice', amount: 120 },
    { id: 2, name: 'Bob', amount: 250 },
    { id: 3, name: 'Charlie', amount: 90 }
  ];
  searchTerm:string = '';
  sortColumn:string = '';
  sortDirection:number = 1;

    ngAfterViewInit() {
    AOS.init({
      duration: 50
    });
  }

  filteredData() {
    return this.data
      .filter(d => d.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      .sort((a:any, b:any) => (a[this.sortColumn] > b[this.sortColumn]) ? 1 : -1);
  }

  sort(column: string) {
    this.sortDirection = this.sortColumn === column ? -this.sortDirection : 1;
    this.sortColumn = column;
  }
}