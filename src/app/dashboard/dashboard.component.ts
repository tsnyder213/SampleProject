import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }

  public gridData: any[] = [
    {
        "ServerID": 1,
        "ServerName": "FTP Server",
        "ServerStatus" : "Running",
        "Available": true,
    },
    {
      "ServerID": 2,
      "ServerName": "TFS",
      "ServerStatus" : "Running",
      "Available": true,
    },
    {
      "ServerID": 3,
      "ServerName": "SQL Server",
      "ServerStatus" : "Running",
      "Available": true,
    }
];


  ngOnInit() {
  }

}
