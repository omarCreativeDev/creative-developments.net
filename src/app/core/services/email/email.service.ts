import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContactForm } from '@core/model/interfaces';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  public send(data: IContactForm): Observable<any> {
    return this.http.post<any>('http://localhost:3000/sendEmail', data);
  }
}
