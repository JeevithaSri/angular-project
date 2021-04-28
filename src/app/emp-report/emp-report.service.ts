import { Injectable } from '@angular/core';
import { IEmpReport } from 'src/app/models/emp-report.models';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpReportService {

  baseUrl = 'http://localhost:3000/empreports';


  constructor(private httpClient: HttpClient) { }


  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
        console.error('Client Side Error :', errorResponse.error.message);
    } else {
        console.error('Server Side Error :', errorResponse);
    }
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
}
addEmpReport(empreport: IEmpReport): Observable<IEmpReport> {
    return this.httpClient.post<IEmpReport>(this.baseUrl, empreport, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    })
    .pipe(catchError(this.handleError));
}

}
