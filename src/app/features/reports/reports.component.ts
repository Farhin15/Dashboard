import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FilterPipe } from '../../shared/pipes/filter.pipe';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule,FilterPipe],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {

}
