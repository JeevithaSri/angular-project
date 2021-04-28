import { Injectable } from '@angular/core';
import { ITask } from 'src/app/models/task.models';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreatetaskService {

  baseUrl = 'http://localhost:3000/tasks';
    constructor(private httpClient: HttpClient) {
    }
   

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error :', errorResponse.error.message);
        } else {
            console.error('Server Side Error :', errorResponse);
        }
        return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
    }
    addTask(task: ITask): Observable<ITask> {
        return this.httpClient.post<ITask>(this.baseUrl, task, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
        .pipe(catchError(this.handleError));
    }

   
}
