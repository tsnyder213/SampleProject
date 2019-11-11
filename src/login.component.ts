import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as ExpiredStorage from 'expired-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  httpClient: HttpClient;

  firstFormGroup: FormGroup;
  Username: string;
  Password: string;
  showErrorBox: boolean = false;

  constructor(private _formBuilder: FormBuilder, private http: HttpClient, private router: Router) {this.httpClient = http; }

  	login(){

      var jsonData = {
        "grant_type": "password",
        "username": this.firstFormGroup.value.firstCtrl,
        "password": this.firstFormGroup.value.secondCtrl,
        "scope": "openid"
      }

  		this.httpClient.post('https://id.ratdogsoftware.com/token', jsonData, { headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})})
        .subscribe(response => {
          var storage = new ExpiredStorage();
          storage.setItem('login', response['refresh_token'], 3600);
          this.router.navigate(['/admin']);
      },
      error => {
        this.showErrorBox = true;
        var loginCard = document.getElementById('logincard');
        loginCard.classList.add("apply-shake");

        loginCard.addEventListener("animationend", (e) => {
        loginCard.classList.remove("apply-shake");
        });
  	})
  }
	

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
        secondCtrl: ['', Validators.required]
      });
  }

}
