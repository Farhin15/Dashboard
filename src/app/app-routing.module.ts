import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
 },
  { 
    path: 'reports', 
    loadComponent: () => import('./features/reports/reports.component').then(m => m.ReportsComponent)
   },
  { 
    path: 'settings', 
    loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}