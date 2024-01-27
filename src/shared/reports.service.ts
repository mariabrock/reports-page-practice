import { Injectable } from '@angular/core';
import { Report } from './report.interface';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor() {}

  _reports$: Observable<Report[]>  = of( [
    {
      "id": 1,
      "groupName": "Beta Group",
      "uiHandle": "group1",
      "iconUrl": "format_bold",
      "reports": [
        {
          "id": 1,
          "displayName": "Alpha 1",
          "description": "description 1",
          "uiHandle": "report1",
          "serviceUrl": "test-report-1",
          "ordering": 100,
          "groupId": 1,
          "pinned": false
        },
        {
          "id": 2,
          "displayName": "Beta 2",
          "description": "description 2",
          "uiHandle": "report2",
          "serviceUrl": "test-report-2",
          "ordering": 200,
          "groupId": 1,
          "pinned": true
        }
      ]
    },
    {
      "id": 2,
      "groupName": "Theta Group",
      "uiHandle": "group2",
      "iconUrl": "title",
      "reports": [
        {
          "id": 1,
          "displayName": "Alpha 3",
          "description": "description 3",
          "uiHandle": "report3",
          "serviceUrl": "test-report-3",
          "ordering": 200,
          "groupId": 2,
          "pinned": false
        },
        {
          "id": 2,
          "displayName": "Gamma 4",
          "description": "description 4",
          "uiHandle": "report4",
          "serviceUrl": "test-report-4",
          "ordering": 100,
          "groupId": 2,
          "pinned": false
        }
      ]
    }
  ])

}


