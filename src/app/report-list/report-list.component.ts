import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';


@Component({
  selector: 'app-report-list',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './report-list.component.html',
  styleUrl: './report-list.component.css'
})
export class ReportListComponent {

  goToReport () {

  }

}
