import { Component, inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { ReportsService } from "../../shared/reports.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Report } from "../../shared/report.interface";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-report-list',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  providers: [],
  templateUrl: './report-list.component.html',
  styleUrl: './report-list.component.css'
})
export class ReportListComponent implements OnInit {
  public unpinnedReports: Report[] = [];
  public pinnedReports: Report[] = [];
  public allReports: Report[] = [];
  public reportGroups: Report[] = []

  public hasSearchText: boolean;
  private searchText: string = '';
  public filteredGroupId: number;
  public sorted: boolean;
  value: any;

  public reportsService = inject(ReportsService);
  popup = inject(MatSnackBar);
  public router = inject(Router);

  constructor() {}

  ngOnInit() {
    this.getReports();
  }

  getReports() {
    this.reportsService._reports$
      .subscribe( data => {
        this.reportGroups = data;
        this.allReports = this.reportGroups.reduce((previous: any, current) => {
            return previous.concat(current);}, []);
        this.allReports.forEach((group, index) => {
          // console.log(group.reports[index].pinned)
          if (group.reports[index].pinned) {
            this.pinnedReports.push(group);
          } else {
            this.unpinnedReports.push(group);
          }
        });

        this.sortReports(true);
      })
  }

  goToReport (report: any) {
    const endpoint = report.serviceurl;
    // noinspection JSIgnoredPromiseFromCall
    this.router.navigate(['app/reports', `${endpoint}`]);
  }

  sortReports(bypassCheck: boolean = false) {
    console.log('sorted!')
    if (!bypassCheck) {
      this.sorted = !this.sorted;
    }

    this.applyFilters();

  }

  filterGroup(groupId: number) {
    console.log('filtering')
  }

  applyFilters(text?: string) {
    console.log('applied filters')
  }

}
