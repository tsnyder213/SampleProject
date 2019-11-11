import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { RouterModule, Routes, NavigationEnd, Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(800 )
      ]),
      transition(':leave',
        animate(800, style({opacity: 0})))
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  navigate(){
    var height = $('.image').height();
    window.scrollTo({ top: height - 60, behavior: 'smooth' });
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  findVH() {
    window.onscroll = function() {
      var height = $('.image').height() - 80;
      if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
        var navbarwrap = document.getElementById("navbarwrap");
        navbarwrap.classList.add('solid');
      }
      else {
        var navbarwrap = document.getElementById("navbarwrap");
        if(navbarwrap){
          navbarwrap.classList.remove('solid');
        }
      }
    };
  }

  ngOnInit() {
    this.findVH();
	}
}
