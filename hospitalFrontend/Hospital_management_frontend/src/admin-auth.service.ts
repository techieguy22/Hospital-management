import { Inject, Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class AdminauthService {
    constructor(){ }
    authenticate(username2: string, password2: string) {
        if (username2 === "Abhi" && password2 === "Abhi@123") {
            sessionStorage.setItem('username2', username2);
            return true;    
        } else {
            return false;
        }
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('username2')
        console.log(!(user === null))
        return !(user === null)
    }
    logout() {
        sessionStorage.removeItem('username2');
    }
}   