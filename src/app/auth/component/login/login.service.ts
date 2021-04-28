import { Injectable } from "@angular/core";
import { IEmployee } from 'src/app/models/login.models';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';




@Injectable({
    providedIn:'root'
    
})
export class LoginService{
    baseUrl = 'http://localhost:3000/employees';
    constructor(private httpClient: HttpClient) {
    }
    getEmployees(): Observable<IEmployee[]> {
        return this.httpClient.get<IEmployee[]>(this.baseUrl)
            .pipe(catchError(this.handleError));
    }

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error :', errorResponse.error.message);
        } else {
            console.error('Server Side Error :', errorResponse);
        }
        return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
    }

    // getEmployee(id: string): Observable<IEmployee> {
        
    //     return this.httpClient.get<IEmployee>(`${this.baseUrl}/${id}`)
    //         .pipe(catchError(this.handleError));
    // }
    getEmployee(username: string,password:string): Observable<IEmployee[]> {
        
        return this.httpClient.get<IEmployee[]>(`${this.baseUrl}?username=${username}&password=${password}`)
            .pipe(catchError(this.handleError));
    }

}