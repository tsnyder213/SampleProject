import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() {
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

  public series: any[] = [{
      name: "FTP Server",
      data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
    }, {
      name: "SQL Server",
      data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, 7.832, 4.3, 4.3]
    }, {
      name: "TFS",
      data: [0.010, 0.375, 1.161, 0.684, 3.7, 3.269, 1.083, 5.127, 3.690, 2.995]
    }];

  public categories: string[] = ["Jan.", "Feb.", "March", "April", "May", "June", "July", "August", "Sept.", "Oct."];

  public messages: any[] = [{
    message: "Server non responsive for 3 cycles live checks",
    sender: "Tanner Snyder",
    actiontype: "error"
  }, {
    message: "You've been invited to join a slack channel!",
    sender: "Team Member 1",
    actiontype: "chat_bubble"
  }]




  ngOnInit() {
  }

}
