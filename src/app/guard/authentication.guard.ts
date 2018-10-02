import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Injectable({
    providedIn: 'root'
})

export class authenticationGuard implements CanActivate{
   
    constructor(public authenticationService: AuthenticationService, public router: Router){}
   
    canActivate():boolean{
        if(!this.authenticationService.isAuthenticated()){
            //this.router.navigate(['login']);
            console.log('You are not authorized to view this page')
            return false;
        }
        return true;
    }
}