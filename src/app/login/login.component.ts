import { Component, OnInit } from '@angular/core';
import * as ExpiredStorage from 'expired-storage';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  correctUsername: string = 'Admin';  //obviously not a real world secret storage solution ;)
  correctPassword: string = 'Testing123';

  signUp() {
  	document.getElementById('container').classList.add("right-panel-active");
    document.getElementById('overlay-left-backbtn').classList.add("z-index");
  };

  signIn() {
    document.getElementById('container').classList.remove("right-panel-active");
    document.getElementById('overlay-left-backbtn').classList.remove("z-index");
  }

  checkCreds() {
    if (this.username == this.correctUsername && this.password == this.correctPassword) {
      var storage = new ExpiredStorage();
      storage.setItem('login', 'test', 3600);
      this.router.navigate(['/protectedpage']);
    }
    else {
      let config = new MatSnackBarConfig();
      config.panelClass = 'center';
      config.duration = 2000;
      this.snackBar.open('Uh oh! Looks like those creds are no good...', '', config);
    }
  }

  constructor(private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

}
