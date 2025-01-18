import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AdminauthService } from "./admin-auth.service";

@Injectable({
    providedIn: 'root'
})
export class AdminauthGuardService implements CanActivate {
    constructor(private adminAuthService: AdminauthService, private router: Router) { }

    canActivate() {
        if (this.adminAuthService.isUserLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['home']);
            this.adminAuthService.logout();
            return false;
        }
    }
}   