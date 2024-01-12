import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { REPORTS, ReportsService } from "../../shared/reports.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Reports } from "../../shared/report.interface";
import { Observable } from "rxjs";

@Component({
  selector: 'app-report-list',
  standalone: true,
  imports: [MaterialModule],
  providers: [{ provide: ReportsService}],
  templateUrl: './report-list.component.html',
  styleUrl: './report-list.component.css'
})
export class ReportListComponent {
  public report: any;
  public reports$: Observable<Reports[]>;
  public unpinnedReports: [] = [];
  public pinnedReports: [] = [];
  public allReports: [] = [];

  public hasSearchText: boolean;
  private searchText: string = '';
  public filteredGroupId: number;
  public sorted: boolean;

  reportService = inject(ReportsService)
  popup = inject(MatSnackBar)

  constructor() {
    this.reports$ = this.reportService.getReports();
  }


  goToReport (report: any) {

  }

  // public goToReport(report: Report): void {
  //   const endpoint = report.serviceurl;
  //   // noinspection JSIgnoredPromiseFromCall
  //   this.router.navigate(['app/reports', `${endpoint}`]);
  // }

  unpinReport(report: any, event: MouseEvent) {

  }

  pinReport(report: any, event: MouseEvent) {

}

  sortReports() {

  }

}
