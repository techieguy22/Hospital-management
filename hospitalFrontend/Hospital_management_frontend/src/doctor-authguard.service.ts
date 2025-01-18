import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AdminauthService } from "./admin-auth.service";
import { DocauthService } from "./doc-auth.service";

@Injectable({
    providedIn: 'root'
})
export class DocauthGuardService implements CanActivate {
    constructor(private docauthService: DocauthService,private router:Router) { }

    canActivate() {
        if (this.docauthService.isUserLoggedIn()) {

            return true;
        } else {
            this.router.navigate(['home']);
            this.docauthService.logout();
            return false;
        }
    }
}   