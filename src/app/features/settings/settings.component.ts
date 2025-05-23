import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FilterPipe } from '../../shared/pipes/filter.pipe';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule,FilterPipe],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}
