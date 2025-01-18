import { Inject, Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class DocauthService {
    constructor(){ }
    authenticate(username: string, password: string) {
        if (username === "Abhi" && password === "Abhi@123") {
            sessionStorage.setItem('username', username);
            return true;    
        } else {
            return false;
        }
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('username')
        return !(user === null)
    }
    logout() {
        sessionStorage.removeItem('username');
    }

}