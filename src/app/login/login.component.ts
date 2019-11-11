import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signUp() {
  	document.getElementById('container').classList.add("right-panel-active");
    document.getElementById('overlay-left-backbtn').classList.add("z-index");
  };

  signIn() {
    document.getElementById('container').classList.remove("right-panel-active");
    document.getElementById('overlay-left-backbtn').classList.remove("z-index");
  }



  constructor() { }

  ngOnInit() {
  }

}
