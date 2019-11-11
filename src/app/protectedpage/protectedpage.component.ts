import { Component, OnInit } from '@angular/core';
import * as ExpiredStorage from 'expired-storage';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-protectedpage',
  templateUrl: './protectedpage.component.html',
  styleUrls: ['./protectedpage.component.scss']
})
export class ProtectedpageComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private router: Router) { }

  logOut() {
    var storage = new ExpiredStorage();
    storage.clear();
    let config = new MatSnackBarConfig();
    config.panelClass = 'center';
    config.duration = 2000;
    this.snackBar.open('Successfully logged out!', '', config);
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
