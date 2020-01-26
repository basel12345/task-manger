// import { Injectable } from '@angular/core';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// @Injectable()
// export class AuthGuard implements CanActivate {

// 	constructor(
// 		private router: Router,
// 		// private storage: Storage
// 	) { }

// 	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


// 		let currentUser = this.storage.GetCurrentUser();

// 		let token = this.storage.GetToken();
// 		if (token) {
// 			return true;
// 		}

// 		this.router.navigate(['account/login'], { queryParams: { returnUrl: state.url } });
// 		return false;

// 	}
// }