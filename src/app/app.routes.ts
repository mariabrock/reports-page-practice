import { Routes } from '@angular/router';
import { ReportListComponent } from './report-list/report-list.component';

export const routes: Routes = [
  { path: 'report-list', component: ReportListComponent },
  { path: '',   redirectTo: '/report-list', pathMatch: 'full' },
];
