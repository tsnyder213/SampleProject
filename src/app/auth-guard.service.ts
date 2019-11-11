import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as ExpiredStorage from 'expired-storage';
import { Observable } from 'rxjs';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private _router: Router, private snackBar: MatSnackBar) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
	    var storage = new ExpiredStorage();
	    if (storage.getItem('login') != null && !storage.isExpired('login')) {
	        return true;
	    }

      let config = new MatSnackBarConfig();
      config.panelClass = 'center';
      config.duration = 2000;
      this.snackBar.open('Access Denied; Please Log In!', '', config);
	    this._router.navigate(['/']);
	    return false;
	}
}
