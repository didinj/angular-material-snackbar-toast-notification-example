import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Data {
  constructor(private http: HttpClient) { }

  // Simulate a successful request
  getDataSuccess() {
    return of({ message: 'Data fetched successfully!' }).pipe(delay(1000));
  }

  // Simulate a failed request
  getDataError() {
    return throwError(() => new Error('Failed to fetch data')).pipe(delay(1000));
  }
}
