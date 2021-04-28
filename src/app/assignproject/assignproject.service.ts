import { Injectable } from '@angular/core';
import { IProject } from 'src/app/models/project.models';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssignprojectService {
  baseUrl = 'http://localhost:3000/employees';


  constructor(private httpClient: HttpClient) { }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
        console.error('Client Side Error :', errorResponse.error.message);
    } else {
        console.error('Server Side Error :', errorResponse);
    }
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
}

addProject(project: IProject): Observable<IProject> {
  return this.httpClient.post<IProject>(this.baseUrl, project, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  })
  .pipe(catchError(this.handleError));
}


}
