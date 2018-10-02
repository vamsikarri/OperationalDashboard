import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public static readonly hostip: string = 'http://52.22.85.175:4000';
  isLoggedIn: boolean;
  constructor(private http: HttpClient) { }
  /**
   * 
   * @param user 
   */
  validateUser(username, password, role){
     var userData = "username=" + username + "&password=" + password + '&role=' + role;
     var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded', 'No-Auth':'True'});
     return this.http.post(AuthenticationService.hostip + '/token',userData,{headers:reqHeader})
     .pipe(map(res => res), catchError(this.handleError));
  }
  /**
   * 
   */
  public isAuthenticated(): boolean{
     return this.getToken() !==  null;
  }
  /**
   * 
   * @param token 
   */
  storeToken(token:string){
    localStorage.setItem('token', token);
  }
  /**
   * Get the token
   */
  getToken(){
    return localStorage.getItem('token');
  }
  /**
   * Remove the token
   */
  removeToken(){
    return localStorage.removeItem('token');
  }
  /**
   * Error handling.
   */
  handleError(error: Response) {
    return throwError(error);
  }
}
