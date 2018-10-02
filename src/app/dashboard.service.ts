import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

declare var $:any;

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public static readonly hostip: string = 'http://52.22.85.175:4000';

  constructor(private http: HttpClient) { }
  /**
   * Generic http call for Dashboard service
   */
  private request(path): Observable<any>{
    return this.http.get<any>(DashboardService.hostip + path).pipe(catchError(this.handleError));
  }
  /**
   * Get all Application names
   */
  public getApplicationDetails(userid):Observable<any> {
    return  this.request('/application?userid=' + userid);
   }
  /**
   * Get Statistics based on Selected Applications 
   */
   public setDashboardStatistics(userid,applications):Observable<any> {
       return this.request('/dashboard?userid=' + userid + '&applications='+ applications);
   }
   /**
    * User Login
    */
   public userLoginCredentials(username, password, role):Observable<any>{
     return this.request('/userlogin?username=' + username + '&password='+ password + '&role=' + role);
   }
   /**
    * User Registration
    */
  userRegistrationDetails(user_identifier,user_role_group_identifier,gathi_application_identifier,access_request_start_date,access_request_end_date):Observable<any>{

    return this.http.post(DashboardService.hostip + '/userregistration', {
          user_identifier:user_identifier,
          user_role_group_identifier:user_role_group_identifier,
          gathi_application_identifier:gathi_application_identifier,
          access_request_start_date:access_request_start_date,
          access_request_end_date:access_request_end_date
      });
   }
   /**
    * Application names in user registration modal
    */
   getApplicationNamesforRegistration():Observable<any>{
     return this.request('/Application_Name');
   }
   /**
    * User Roles for Registration 
    */
   getUserRolesforRegsitration():Observable<any>{
     return this.request('/Role_group');
   }
    /**
     * Error handling.
     */
    handleError(error: Response) {
      return throwError(error);
    }

}
