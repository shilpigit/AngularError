import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HTTPServiceCallService {

  baseUrl = environment.baseUrl;

  constructor(private _httpClient: HttpClient) { }

  getEmployeesList() {
    return this._httpClient.get(this.baseUrl + '/v1/employees').pipe(
      catchError(this.handleError)
    );
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMsg = '';
    if (errorResponse.error instanceof ErrorEvent) {
      errorMsg = 'Error: ${errorResponse.error.message}'; // Client side error
    }
    else{
      errorMsg = 'Error: ${errorResponse.status}\nMessage: ${errorResponse.message}'; // Server side error
    }
    return throwError(errorMsg);
  }
}
